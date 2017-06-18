//
// Move articles from one folder to another (recursively) attending to all references in all files.
//
// References inside the article is updated with new relative paths.
// References in all articles referring to the moved article are also updated.
// "All articles" are those articles in the folder the program is started from + all subfolders,
// excluding some folders (search for excludedFolders further down).
// Any media files belonging to the moved article are also moved to the new folder, except
// media files belonging to other articles. The latter are copied, not moved.
// If a target filename is given (and not only a target folder), the article is renamed, including all references.
// You may use the program to rename an article's filename in a folder.
//
// NOTE! ALWAYS RUN THE PROGRAM FROM YOUR ROOT DOCS FOLDER! (like d:\git\docs)
// 
// The program is written specifically for Genus AS (www.genus.no) style of use of DocFX markdown files,
// and may not suit other usage. For instance, the code assumes media files are in a local 'media' folder for each article.
// But feel free to contribute.
// 
// Usage:
// 1) Download and install node.js from nodejs.org
// 2) Open a command line window, and go to d:\git\docs (or whereever your root DocFX docs folder is).
// 3) In the command line window, run "npm install fs-extra"
// 4) Example 1: Move an article from an folder to another:
//      node movearticles developers/security-and-privacy.md developers/defining-the-application-model
//    Example 2: Move an article from an folder to another, including renaming the article. In this
//               case the article is moved to the root folder.
//      node movearticles developers/defining-the-application-model/glossary.md terminology.md
//    Example 3: Renaming an article without moving it:
//      node movearticles developers/defining-the-application-model.md developers/defining-an-app-model.md
// 
// See also https://github.com/GenusAS/docs/blob/master/editing-docs-locally.md
//
// TODO:
//   - Add some try/catch on IO commands.
//   - Handle delimiters (forward and backward slashes) in a better way?
//   - Table of contents files (toc.yml) are NOT updated (yet).
//   - Drag and drop UI.
//   - Upgrade code to ES6 (using class etc).
//   - Change ArticleClass.findCrossRef and ArticleClass.findExt into static methods (belonging to the CrossRefClass instead).
//   - Add support for renaming media files.

var fs = require("fs");
var fsExtra = require('fs-extra');
var path = require('path');

// Do not search for articles in these root folders.
var excludedFolders = [".git","_site","_exported_templates",".vscode"];

var usageDescription = "Usage: node movearticle.js <a markdown source article filename> <target folder>";

// Read and check command line arguments.
if (process.argv.length != 4) {
    console.log(usageDescription);
    process.exit(1);
}

process.argv[2] = process.argv[2].toLowerCase();
process.argv[3] = process.argv[3].toLowerCase();

// Check source command line arguments.
if (!fs.existsSync(process.argv[2])) {
    console.log( "Source article '" + process.argv[2] + "' not found." );
    console.log( usageDescription );
    process.exit(1);
}

var isMovingDirectory = false;
if (fs.lstatSync(process.argv[2]).isDirectory()) {
    isMovingDirectory = true;
}
else if (path.extname(process.argv[2]) != ".md") {
    console.log( "Source article must be a Markdown file with extension '.md'." );
    console.log( usageDescription );
    process.exit(1);
}

var sourceFullFilename = toForwardSlash(process.argv[2]);
var sourceFilename = "";
if (!isMovingDirectory)
    sourceFilename = path.basename(sourceFullFilename);

var dirnameLowercase = __dirname.toLowerCase();

// Make sure source filename has full path.
if (sourceFullFilename.indexOf(toForwardSlash(dirnameLowercase)) == -1)
    sourceFullFilename = toForwardSlash(path.join(dirnameLowercase,sourceFullFilename));

// path.basename always return last path segment, which could be a folder.
// Therefore some extra code here...
var targetFullFilename = process.argv[3];
var targetFilename = "";
var isTargetAFolder = (targetFullFilename.indexOf(".") == -1); // Improve this check later.

if (isTargetAFolder) {
    if (!fs.existsSync(targetFullFilename)) {
        try {
            fs.mkdirSync(targetFullFilename);
        }
        catch (e) {
            console.log("Failed creating target folder " + targetFullFilename);
            process.exit(1);
        }
    }
    targetFullFilename = toForwardSlash(targetFullFilename);
    targetFilename = sourceFilename;
}
else {
    targetFullFilename = toForwardSlash(path.dirname(process.argv[3])); 
    targetFilename = path.basename(process.argv[3]);
}

targetFullFilename = toForwardSlash(path.join(targetFullFilename,targetFilename));

// Make sure target filename has full path.
if (targetFullFilename.indexOf(toForwardSlash(dirnameLowercase)) == -1)
    targetFullFilename = toForwardSlash(path.join(dirnameLowercase,targetFullFilename));

// Count changes and report to console at end.
var changeCount = 0;

if (isMovingDirectory) {
    console.log("Moving many articles.");
    moveArticlesRecursively(sourceFullFilename,targetFullFilename);
}
else {
    console.log("Moving one article.");
    moveOneArticle(sourceFullFilename,targetFullFilename);
}

console.log(changeCount + " changes. Note that any table of contents files (toc.yml) must be updated manually.");

// ------------------------------------------------------------
function moveArticlesRecursively(sourceFolder,targetFolder){
    var sourceFiles = fs.readdirSync(sourceFolder);
    for(var i=0;i<sourceFiles.length;i++) {
        var sourceFileBase = sourceFiles[i];
        var sourceFile = toForwardSlash(path.join(sourceFolder,sourceFileBase));
        if (fs.statSync(sourceFile).isDirectory()) {
            if (!inExcludedFolders(sourceFile) && sourceFile.lastIndexOf("/media/") == -1)
                moveArticlesRecursively(sourceFile,path.join(targetFolder,sourceFileBase));
        }
        else if (sourceFile.lastIndexOf(".md") != -1) {
            var targetFile = toForwardSlash(path.join(targetFolder,path.basename(sourceFile)));
            moveOneArticle(sourceFile,targetFile);
        }
    }
};



function moveOneArticle(sourceFullFilename,targetFullFilename) {
    var targetMediaFoldername = toForwardSlash(path.join(path.dirname(targetFullFilename),"media"));
    var targetFullFoldername = toForwardSlash(path.dirname(targetFullFilename));
    createMissingFolders(targetFullFoldername);

    //
    // Fix references in source article and copy/move any media files.
    //
    var sourceArticle = new ArticleClass(sourceFullFilename);
    console.log("Processing source article " + sourceArticle.filename);
    var reference = sourceArticle.findCrossRef(reference);
    while (reference != null) {
        if (reference.isMediaRef()) {
            if (reference.referencedFromOtherArticles()) {
                copyMediaFile(reference,targetMediaFoldername);
                changeCount++;
            }
            else {
                moveMediaFile(reference,targetMediaFoldername);
                changeCount++;
            }
        }
        else if (reference.isMarkdownRef())
        {
            console.log("Adjusting reference " + reference.text());
            var oldLength = reference.text().length;
            reference.adjustRefByOwnerChange(targetFullFoldername);
            sourceArticle.update(reference,oldLength);
            changeCount++;
        }

        reference = sourceArticle.findCrossRef(reference);
    }

    sourceArticle.save();

    //
    // Move article.
    //
    console.log("Moving article " + sourceFullFilename);
    moveFile(sourceFullFilename,targetFullFilename)
    changeCount++;

    //
    // Fix references in any article refering to our source article.
    //
    var filelist = readDirRecursively(dirnameLowercase,filelist);
    for(var i=0;i<filelist.length;i++){
        var file = filelist[i];
        if (file != sourceFullFilename ) {
            var art = new ArticleClass(file);
            var ref = art.findCrossRef(ref);
            var isModified = false;
            while (ref != null) {
                if (ref.absoluteRef() == sourceFullFilename) {
                    console.log(art.filename + ": Adjusting reference " + ref.text());
                    var oldLength = ref.text().length;
                    ref.adjustRefByTargetChange(targetFullFilename);
                    art.update(ref,oldLength);
                    isModified = true;
                    changeCount++;
                }
                ref = art.findCrossRef(ref);
            }
            if (isModified)
                art.save();
        }
    }
}


// ------------------------------------------------------------

function CrossRefClass(ownerFilename) {
    // Constructor code
    this.isEmpty = true;
    this.ownerFilename = ownerFilename; // The article file the cross reference is located in.
    this.pos = -1; // Start position in the string the cross ref was extracted from.
    this.linkStr = "";
    this.refExtStr = "";
    this.refStr = "";
    this.titleStr = "";

    // Return the whole cross reference string on format "[<link text](<ref url><title>)".
    this.text = function() {
        var str = "[" + this.linkStr + "](" + this.refStr;
        if (this.titleStr != "")
            str += " " + this.titleStr;
        str += ")";
        return str;
    }

    // Two alternatives for adjusting relative references.
    // In this first alternative, the from folder (owner) is different from the one the reference is found in,
    // i.e. the article containing the xref is moved.
    this.adjustRefByOwnerChange = function(ownerFolder) {
        var fromFolder = ownerFolder; // The folder the article (owning the xref) is moved to, i.e. the new base point for all cross references inside the article.
        var toFile = this.absoluteRef(); // The folder the reference points to.
        this.refStr = toForwardSlash(path.relative(fromFolder,toFile));
    }

    // Two alternatives for adjusting relative references.
    // In this second alternative, the xref is to point to the new placement of the referenced article,
    // i.e. the article the xref is poining to is moved.
    this.adjustRefByTargetChange = function(targetFile) {
        var fromFolder = toForwardSlash(path.dirname(this.ownerFilename));
        var toFile = targetFile;
        this.refStr = toForwardSlash(path.relative(fromFolder,toFile));
    }

    // Returns true if refering to a markdown file.
    this.isMarkdownRef = function(){
        return (this.refExtStr == ".md");
    }

    // Returns true if refering to an internal heading.
    this.isInternalRef = function(){
        return (this.refStr.substr(0,1) == "#");
    }

    this.isMediaRef = function() {
        if (this.refStr != "") {
            if (this.refStr.indexOf("media/") != -1)
                return true
            else if (indexOfSet(this.refStr,[".jpg",".gif", ".png", ".ico"]) != -1)
                return true;
        };
        return false;
    }

    // Returns reference file with full path.
    this.absoluteRef = function(overrideOwnerFilename = "") {
        if (this.isInternalRef())
            return "";
        var filename = this.ownerFilename;
        if (overrideOwnerFilename != "")
            filename = overrideOwnerFilename;
        return toForwardSlash(path.resolve(path.dirname(filename),this.refStr));
    }

    // Returns true if this reference is referenced from other articles than itself.
    this.referencedFromOtherArticles = function() {
        var filelist = readDirRecursively(dirnameLowercase,filelist);
        for(var i=0;i<filelist.length;i++){
            var file = filelist[i];
            if (file != this.ownerFilename ) {
                var art = new ArticleClass(file);
                var ref = art.findCrossRef(ref);
                while (ref != null) {
                    if (ref.absoluteRef() == this.absoluteRef())
                        return true;
                    ref = art.findCrossRef(ref);
                }
            }
        }
        return false;
    }
}

// ------------------------------------------------------------

function ArticleClass(filename) {
    // Constructor code
    this.filename = toForwardSlash(filename);
    this.content = fs.readFileSync(this.filename, 'ascii');

    // Update article text with new reference.
    // Needs to know length of old crossRef string.
    this.update = function(crossRef, oldLength){
        this.content = this.content.substring(0,crossRef.pos) + crossRef.text() + this.content.substring(crossRef.pos+oldLength);
    }

    // Save to file.
    this.save = function() {
        saveToFile(this.filename,this.content);
    };

    // Takes a string as input and returns first occurrence of
    // a markdown cross reference after the given string position.
    // If a markdown cross reference is found, a CrossRefClass object is created and returned.
    // Null is returned if nothing found.
    // A cross reference string is on the format
    //      [link text](a-reference "title text")
    // The title text is optional. Most browsers show the title text when hovering over a link.
    // Returns next cross ref following the inputed one.
    this.findCrossRef = function(previousCrossRef) {
        if (previousCrossRef == undefined  || previousCrossRef == null)
            pos = 0
        else
            pos = previousCrossRef.pos + previousCrossRef.text().length;

        var linkTextRightPos = this.content.indexOf("](",pos);
        while (linkTextRightPos != -1) {

            var refLeftPos = linkTextRightPos + 1;
            
            var linkTextLeftPos = this.content.lastIndexOf("[",linkTextRightPos);
            if (linkTextLeftPos == -1){
                console.log("ArticleClass.findCrossRef: Could not find left bracket");
                process.exit(1);
            }

            var extension = this.findExt(this.content,refLeftPos);
            if (extension != null) {
                var refExtStr = extension.extStr.toLowerCase();
                var refEndPos = extension.extPos + extension.extStr.length-1; // E.g. point to the "d" in ".md".

                var refRightPos = this.content.indexOf(")",refLeftPos);
                if (refRightPos == -1){
                    console.log("ArticleClass.findCrossRef: Unable to find end parenthesis of ..." + inputStr.substr(linkTextLeftPos,200));
                    process.exit(1);
                }

                // In case of references to other things than known file types/extentions,
                // it may happen that the known file type/extension is found after ")".
                if (refEndPos<refRightPos) {
                    var crossRef = new CrossRefClass(this.filename);
                    crossRef.isEmpty = false;
                    crossRef.pos = linkTextLeftPos;
                    crossRef.refExtStr = refExtStr;
                    var refTitleLeftPos = this.content.indexOf(" ",refEndPos);
                    if (refTitleLeftPos != -1 && refTitleLeftPos < refRightPos) // Not interested in spaces after the right parenthesis.
                        crossRef.titleStr = this.content.substring(refTitleLeftPos,refRightPos).trim();
                    crossRef.linkStr = this.content.substring(linkTextLeftPos+1,linkTextRightPos);
                    crossRef.refStr = this.content.substring(refLeftPos+1,refEndPos+1);
                    return crossRef;
                }
            }
            linkTextRightPos = this.content.indexOf("](",linkTextRightPos+1);
        }
        return null; // Nothing found.
    }

    // Find end parenthesis in strings like (../../glossary.md "Globally Unique Identifier (GUID)").
    // Note! All parenthesis and quotation marks must be balanced within the string.
    this.findEndParenthesis = function(str,afterPos){
        var i = afterPos;
        var countParenthesis = 0;
        var withinQuotation = false;
        while (i < str.length){
            var thisChar = str[i];
            var nextChar = (i < str.length-1)?str[i+1]:'';
            if (thisChar == '(') countParenthesis++;
            if (thisChar == ')') countParenthesis--;
            if (thisChar == '"' ) withinQuotation = !withinQuotation;
            if (thisChar == '\\' && nextChar == '"') i++; // Skip escaped quotation marks.
            if (thisChar == ')' && countParenthesis == 0)
                return i;
            i++;
        }
        return -1;
    }


    // Find extension in cross reference string on format .nn, .nnn or .nnnn.
    // Pos is the start position of the reference in the inputed string.
    // Returns object containg extension string and position.
    this.findExt = function(str,afterPos){
        // Find end parenthesis, then trace backwards until first . (punctuation mark), skipping any title string enclosed by " (quotation marks).
        // (and potentially containing punctuation marks).
        var pos = this.findEndParenthesis(str,afterPos);
        if (pos == -1) {
            console.log("ArticleClass.findExt: Could not find end parenthesis.");
            process.exit(1);
        }
        var insideAmpersand = false;
        var endOfExtPos = pos;
        var char;
        while (pos > afterPos) {
            pos--;
            char = str.substr(pos,1);
            if (char == "\"") {
                insideAmpersand = !insideAmpersand;
                endOfExtPos = pos;
            }
            else if (char == " ")
                endOfExtPos = pos;
            else if (char == "." && !insideAmpersand) {
                // Found extension
                return {
                    extStr : str.substring(pos,endOfExtPos),
                    extPos : pos
                };
            }
        }
        return null;
    }
}

// ------------------------------------------------------------
function createMissingFolders(folder){
    console.log("Create any missing folders in: " + folder);
    var folders = folder.split("/");
    var intermediateFolder = toForwardSlash(path.parse(folder).root);
    for (var i=1;i<folders.length;i++) { // Start at 1, skipping root.
        intermediateFolder = toForwardSlash(path.join(intermediateFolder,folders[i]));
        try {
          if (!fs.existsSync(intermediateFolder))
              fs.mkdirSync(intermediateFolder);
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}


// ------------------------------------------------------------
function copyMediaFile(crossRef,targetFoldername) {
    if (!fs.existsSync(targetFoldername))
        fs.mkdirSync(targetFoldername);
    var source = crossRef.absoluteRef();
    var target = path.join(targetFoldername,path.basename(source));
    console.log("Copy media file from " + source + " to " + target);
    copyFile(source,target);
}

// ------------------------------------------------------------
function moveMediaFile(crossRef,targetFoldername) {
    if (!fs.existsSync(targetFoldername))
        fs.mkdirSync(targetFoldername);
    var source = crossRef.absoluteRef();
    var target = path.join(targetFoldername,path.basename(source));
    console.log("Move media file from " + source + " to " + target);
    moveFile(source,target);
}

// ------------------------------------------------------------
function saveToFile(filename, content){
    try {
        if (fs.existsSync(filename)) {
            fs.unlinkSync(filename);
        }
        fs.writeFileSync(filename,content);
    }
    catch (e) {
        console.log("Failed writing to file " + filename);
        process.exit(1);
    }
}

// ------------------------------------------------------------
// Read dir recursively and return filelist
// For no filtering provide empty fileext.
// For filtering, provide a file extension like ".md" (default)
function readDirRecursively(dir,filelist,fileext = ".md"){
    files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        var filename = toForwardSlash(path.join(dir, file));
        if (fs.statSync(filename).isDirectory()) {
            if (!inExcludedFolders(filename))
                filelist = readDirRecursively(filename,filelist,fileext);
        }
        else {
            // Always collect if no filter.
            if (fileext == '')
                filelist.push(toForwardSlash(filename))
            else if (filename.lastIndexOf(fileext) != -1)
                filelist.push(toForwardSlash(filename))
        }
    });
    return filelist;
};

// ------------------------------------------------------------
// Read dir non-recursively and return filelist
// For no filtering provide empty fileext.
// For filtering, provide a file extension like ".md" (default)
function readDir(dir,filelist,fileext = ".md"){
    files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        var filename = toForwardSlash(path.join(dir, file));
        if (!fs.statSync(filename).isDirectory()) {
            // Always collect if no filter.
            if (fileext == '')
                filelist.push(toForwardSlash(filename))
            else if (filename.lastIndexOf(fileext) != -1)
                filelist.push(toForwardSlash(filename))
        }
    });
    return filelist;
};

// ------------------------------------------------------------
function inExcludedFolders(foldername) {
    if (foldername.slice(-1) != "/")
        foldername += "/";
    for (var i=0;i<excludedFolders.length;i++){
        if (foldername.indexOf("/" + excludedFolders[i] + "/") != -1)
            return true;
    }
    return false;
}

// ------------------------------------------------------------
// // Change \ to /...
function toForwardSlash(str) {
    return str.replace(/\\/g,"/");
}

// ------------------------------------------------------------
// Returns index of match with lowest position.
function indexOfSet(str,strSet) {
    var lowestPos = -1;
    for (var i=0;i<strSet.length;i++) {
        var foundPos = str.indexOf(strSet[i]);
        if (lowestPos == -1)
            lowestPos = foundPos
        else if (foundPos != -1 && foundPos < lowestPos)
            lowestPos = foundPos;
    }
    return lowestPos;
}

// ------------------------------------------------------------
function moveFile(source,target){
    if (toForwardSlash(source.toLowerCase()) == toForwardSlash(target.toLowerCase()))
        return;
    try {
        fsExtra.copySync(source, target);
        fs.unlinkSync(source);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

// ------------------------------------------------------------
function copyFile(source,target){
    if (source == target)
        return;
    try {
        fsExtra.copySync(source, target);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

// ------------------------------------------------------------
function saveToFile(filename, content){
    try {
        if (fs.existsSync(filename)) {
            fs.unlinkSync(filename);
        }
        fs.writeFileSync(filename,content);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}
