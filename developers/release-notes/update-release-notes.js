//
// Read release notes from Actio and populate markdown files on docs.genus.no,
// folder developers/release-notes and files like release-notes-2017.5.md
//
var request = require('request');
var github  = require('octonode');
var atob    = require('atob');
var fs      = require('fs');
var moment  = require('moment');

var githubUsername;
var githubPassword;

// Read parameters.
if (process.argv.length == 2) {
  // E.g. "node update-release-notes.js" => Fetch from config file.
  try {
    var config = require('./update-release-notes.json');
    githubUsername = config.githubDocsUsername;
    githubPassword = config.githubDocsPassword;
  }
  catch (error) {
    console.log(error);
    process.exit(1);
  }
}
else if (process.argv.length == 4) {
  // E.g. "node update-release-notes.js aUsername aPassoword" => Fetch from command line params.
  githubUsername = process.argv[2];
  githubPassword = process.argv[3];
}
else  {
  console.log("usage: node update-release-notes.js [git-username git-password]");
  process.exit(1);
};

// Log into github.
var client = github.client({
  username: githubUsername,
  password: githubPassword
});

// Get ref to repos.
var ghrepo = client.repo('genusbiz/docs');


// ------------------------------------------------------------
// Markdown section
function mdSection(name,content,start,end){
  this.name    = name;
  this.content = content;
  this.start   = start;   // Start and end positions in original markdown
  this.end     = end;
}

// ------------------------------------------------------------
function ReleaseClass(name, releaseID, expired, versionNumber) {
  // Constructor code
  this.name             = name;
  this.releaseID        = releaseID;
  this.expired          = expired;
  this.versionNumber    = versionNumber;
  this.releaseNotes     = []; // Array of relaseNoteClass.
  this.originalMarkdown = "";
  this.originalExist    = false;
  this.originalSections = []; // Array of mdSection.
  this.newMarkdown      = "";
  this.sha;
  
  this.findSection = function(sectionName){
    let resultArray = this.originalSections.filter(section => section.name == sectionName);
    if (resultArray.length > 0)
      return resultArray[0];
    console.log("ReleaseClass.findSection: Unable to find section " + sectionName + " for " + this.name );
  }
};

// ------------------------------------------------------------
function releaseNoteClass(id, no, type, subject, products, description) {
  // Constructor code
  this.id          = id;
  this.no          = no;
  this.type        = type;
  this.subject     = subject;
  this.products    = products;
  this.description = description;
  this.sortfield   = type + "#" + no;
};

// ------------------------------------------------------------
// Call Actio REST service to read available releases (2017.1, 2017.2, ...)
function callReleasesRestService(releases) {
  return new Promise((resolve, reject) =>{
    request('http://actio.genus.net/genus/api/public/rest/release/release',
    function (error, response, body) {
      if (response && response.statusCode == 200) {
        var candidates = JSON.parse(body);
        //console.log(body);
        for (var c in candidates){
          if (!candidates.hasOwnProperty(c)) continue;
      
          var aRelease = candidates[c];
          if (aRelease['Expired'] == false) {
            var releaseObject = new ReleaseClass(aRelease['Name'].trim(),aRelease['ReleaseID'],aRelease['Expired'],aRelease['VersionNumber']);
            releases.push(releaseObject);
          }
        }
        releases.sort(function(a,b){return (a.name > b.name) ? 1 :((a.name < b.name) ? -1 : 0);});
        //console.log(JSON.stringify(releases));
        resolve(releases);
      }
      else {
        reject(error);
        }
      }
    );
  });
}

// ------------------------------------------------------------
// Call Actio REST service to read all release notes for one release.
function callReleaseNotesRestService(name,releaseNotes){
  return new Promise((resolve,reject) => {
    request("https://actio.genus.net/genus/api/public/rest/release/releaseNotes?Release=" + name,
    function (error, response, body) {
      if (response && response.statusCode == 200) {
        if (body == "") {
          resolve(releaseNotes);
          return;
        }
        var candidates = JSON.parse(body);
        for (var c in candidates){
          if (!candidates.hasOwnProperty(c))
            continue;
      
          var aReleaseNote = candidates[c];
          if (aReleaseNote["Release Note State ID"] != 4) // 4 = Published
            continue;

          var subject = "";
          if (aReleaseNote['Subject'] != null)
            subject = aReleaseNote['Subject'].trim();

          var description = "";
          if (aReleaseNote['Description'] != null)
            description = aReleaseNote['Description'].trim();
      
          var rn = new releaseNoteClass(aReleaseNote.ID,
                                        aReleaseNote['Release Note No'],
                                        aReleaseNote['Release Note Type ID'],
                                        subject,
                                        aReleaseNote['Core products'],
                                        description);
          releaseNotes.push(rn);
        }
      
        releaseNotes.sort(function(a,b){return (a.sortfield > b.sortfield) ? 1 :((a.sortfield < b.sortfield) ? -1 : 0);});
              
        resolve(releaseNotes);
      }
      else
        reject(error);
    })
  })
}

// ------------------------------------------------------------
function callOperationsSampleRestService(){
  request.post({
      url: 'https://operations-desktop.genus.net/genus/api/public/rest/probe/sample',
      json: {
        sampled_by:      "update-release-notes.js",
        sample_code:     "UPDATE_RELEASE_NOTES",
        value:           1,
        sample_datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
        version:         7
      }
  })
}

// ------------------------------------------------------------
function readReleaseNoteFileFromGitHub(release) {
  return new Promise((resolve,reject) => {
    ghrepo.contents('developers/release-notes/release-notes-' + release.name + '.md', 
    function(err,data,headers){
      if (headers && headers.status == "200 OK") {
        release.originalMarkdown = atob(data.content);
        release.originalExist = true;
        release.sha = data.sha;
        resolve(release);
      }
      else if (err && err.statusCode == 404) { // Not Found
        release.originalMarkdown = "";
        release.originalExist = false;
        resolve(release);
      }
      else
        reject(err);
    })
  })
}

// ------------------------------------------------------------
function updateReleaseNoteFileInGitHub(release,commitMessage) {
  return new Promise((resolve,reject) => {
    ghrepo.updateContents(
      'developers/release-notes/release-notes-' + release.name + '.md', 
      commitMessage,
      release.newMarkdown,
      release.sha,
      function(err,data,headers){
        if (headers && headers.status == "200 OK") {
          resolve(release);
        }
        else
          reject(err);
      })
  })
}


// ------------------------------------------------------------
function logAndExit(str,releaseName,sectionName){
  console.log("Couldn't find '" + str + "' in original markdown for release " + releaseName + "(" + sectionName + ")");
  process.exit(1);
}

// ------------------------------------------------------------
function interpretSection(md,releaseName,sectionName,startPos,startTag,endTag) {
  var start = md.indexOf(startTag,startPos);
  if (start == -1) logAndExit(startTag,releaseName,sectionName);
  var startTagEnd = "-->";
  start = md.indexOf(startTagEnd,start);
  if (start == -1) logAndExit(startTagEnd,aRelease.name);
  start += 3;

  var end = md.indexOf(endTag,start);
  if (end == -1) logAndExit(str,releaseName,sectionName);
  var content = md.substring(start,end).trim()+"\n";
  //console.log("\n---------\n" + content);
  return new mdSection(sectionName,content,start,end);
}

// ------------------------------------------------------------
// To be able to compare old and new markdown,
// we must first copy the editable sections from the old markdown.
function breakOriginalMarkdownIntoSections(aRelease){
  var md  = aRelease.originalMarkdown;
  
  // From start of text to start of INSTALLATION.
  var str = "<!--rntype01-start";
  var end = md.indexOf(str);
  if (end == -1) logAndExit(str,aRelease.name);
  var section = new mdSection("intro",md.substring(0,end),0,end); //#JAN
  aRelease.originalSections.push(section);
  //console.log("\n---------\n" + section.content);

  // From end of INSTALLATION to start of END-OF-LIFE
  var section = interpretSection(md,aRelease.name,"end-of-life",end,"<!--rntype01-end","<!--rntype03-start");
  aRelease.originalSections.push(section);

  // From end of END-OF-LIFE to start of DEPRECATED
  var section = interpretSection(md,aRelease.name,"deprecated",end,"<!--rntype03-end","<!--rntype04-start");
  aRelease.originalSections.push(section);

  // From end of DEPRECATED to start of BREAKING
  var section = interpretSection(md,aRelease.name,"breaking",end,"<!--rntype04-end","<!--rntype05-start");
  aRelease.originalSections.push(section);

  // From end of BREAKING to start of MAJOR
  var section = interpretSection(md,aRelease.name,"major",end,"<!--rntype05-end","<!--rntype06-start");
  aRelease.originalSections.push(section);

  // From end of MAJOR to start of MINOR
  var section = interpretSection(md,aRelease.name,"minor",end,"<!--rntype06-end","<!--rntype07-start");
  aRelease.originalSections.push(section);

  // From end of MINOR to start of BUGS (= resolved issues)
  var section = interpretSection(md,aRelease.name,"bugs",end,"<!--rntype07-end","<!--rntype08-start");
  aRelease.originalSections.push(section);

  // From end of BUGS (= resolved issues) to start of ISSUES
  var section = interpretSection(md,aRelease.name,"issues",end,"<!--rntype08-end","<!--rntype09-start");
  aRelease.originalSections.push(section);

  // From end of ISSUES to CHANGELOG tag
  var section = interpretSection(md,aRelease.name,"changelog",end,"<!--rntype09-end","<!--changelog");
  aRelease.originalSections.push(section);
}


// ------------------------------------------------------------
function releaseNotesToStr(rNotes){
  if (rNotes.length == 0)
    return "";

  var str = "";
  var subjectLine = "";
  
  for(var r=0;r<rNotes.length;r++) {
    str += "<!--ID " + rNotes[r].id + " -->\n";
    subjectLine = "**#" + rNotes[r].no + " " + rNotes[r].subject + "**";
    if (rNotes[r].products != null && rNotes[r].products != "")
      subjectLine += " (" + rNotes[r].products + ")";
    str += subjectLine + "\n";
    if (rNotes[r].description)
      str += "\n" + rNotes[r].description + "\n\n";
    else
      str += "\n";
  }
  return str;
}


// ------------------------------------------------------------
function createNewMarkdown(aRelease){
  const startTagSuffix = " DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->\n";
  const endTagSuffix   = " DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->\n";

  // Copy INTRO from original markdown.
  var aSection = aRelease.findSection("intro");
  aRelease.newMarkdown = aSection.content;
  //console.log(aRelease.newMarkdown + "\n-------------\n");
  var rNotes;
  var rNotesStr;
  
  // INSTALLATION / UPGRADE
  rNotes = aRelease.releaseNotes.filter(rn => rn.type == 1);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype01-start INSTALLATION / UPGRADE." + startTagSuffix;
  if (rNotesStr != "") {
    aRelease.newMarkdown += "\nSee also the following notes.\n\n";
    aRelease.newMarkdown += rNotesStr;
  }
  else
    aRelease.newMarkdown += "\n"; // Not necessary to add anything special if no release notes of this kind.
  aRelease.newMarkdown += "<!--rntype01-end   INSTALLATION / UPGRADE." + endTagSuffix;
  //console.log(aRelease.newMarkdown + "\n-------------\n");

  // Copy text inbetween INSTALLATION / UPGRADE and END-OF-LIFE from original markdown.
  aSection = aRelease.findSection("end-of-life");
  aRelease.newMarkdown += aSection.content;
  
  // END-OF-LIFE
  rNotes = aRelease.releaseNotes.filter(rn => rn.type == 3);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype03-start END-OF-LIFE." + startTagSuffix;
  if (rNotesStr != "")
    aRelease.newMarkdown += rNotesStr
  else
    aRelease.newMarkdown += "There are no end-of-life functionality identified in this release.\n";
  aRelease.newMarkdown += "<!--rntype03-end   END-OF-LIFE." + endTagSuffix;
  //console.log(aRelease.newMarkdown + "\n-------------\n");
  
  // Copy text inbetween END-OF-LIFE AND DEPRECATED from original markdown.
  aSection = aRelease.findSection("deprecated");
  aRelease.newMarkdown += aSection.content;

  // DEPRECATED
  rNotes = aRelease.releaseNotes.filter(rn => rn.type == 4);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype04-start DEPRECATED." + startTagSuffix;
  if (rNotesStr != "")
    aRelease.newMarkdown += rNotesStr
  else
    aRelease.newMarkdown += "There is no deprecated functionality in this release.\n";
  aRelease.newMarkdown += "<!--rntype04-end   DEPRECATED." + endTagSuffix;

  // Copy text inbetween DEPRECATED AND BREAKING from original markdown.
  aSection = aRelease.findSection("breaking");
  aRelease.newMarkdown += aSection.content;

  // BREAKING
  rNotes = aRelease.releaseNotes.filter(rn => rn.type == 5);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype05-start BREAKING." + startTagSuffix;
  if (rNotesStr != "")
    aRelease.newMarkdown += rNotesStr
  else
    aRelease.newMarkdown += "There are no breaking changes in this release.\n";
  aRelease.newMarkdown += "<!--rntype05-end   BREAKING." + endTagSuffix;

  // Copy text inbetween BREAKING and MAJOR from original markdown.
  aSection = aRelease.findSection("major");
  aRelease.newMarkdown += aSection.content;

  // MAJOR
  rNotes = aRelease.releaseNotes.filter(rn => rn.type == 6);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype06-start MAJOR." + startTagSuffix;
  if (rNotesStr != "")
    aRelease.newMarkdown += rNotesStr
  else
    aRelease.newMarkdown += "There are no major new functionality in this release.\n";
  aRelease.newMarkdown += "<!--rntype06-end   MAJOR." + endTagSuffix;

  // Copy text inbetween MAJOR and MINOR from original markdown.
  aSection = aRelease.findSection("minor");
  aRelease.newMarkdown += aSection.content;

  // MINOR
  rNotes = aRelease.releaseNotes.filter(rn => rn.type == 7);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype07-start MINOR." + startTagSuffix;
  if (rNotesStr != "")
    aRelease.newMarkdown += rNotesStr
  else
    aRelease.newMarkdown += "There are no minor new functionality in this release.\n";
  aRelease.newMarkdown += "<!--rntype07-end   MINOR." + endTagSuffix;

  // Copy text inbetween MINOR and BUGS (= RESOLVED ISSUES) from original markdown.
  aSection = aRelease.findSection("bugs");
  aRelease.newMarkdown += aSection.content;

  // BUGS (= RESOLVED ISSUES)
  rNotes = aRelease.releaseNotes.filter(rn => rn.type == 8);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype08-start RESOLVED ISSUES." + startTagSuffix;
  if (rNotesStr != "")
    aRelease.newMarkdown += rNotesStr
  else
    aRelease.newMarkdown += "There are no resolved issues in this release.\n";
  aRelease.newMarkdown += "<!--rntype08-end   RESOLVED ISSUES." + endTagSuffix;

  // Copy text inbetween BUGS (= RESOLVED ISSUES) and ISSUES from original markdown.
  aSection = aRelease.findSection("issues");
  aRelease.newMarkdown += aSection.content;

  // ISSUES
  rNotes = aRelease.releaseNotes.filter(rn => rn.type == 9);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype09-start KNOWN ISSUES." + startTagSuffix;
  if (rNotesStr != "")
    aRelease.newMarkdown += rNotesStr
  else
    aRelease.newMarkdown += "There are no known issues in this release.\n";
  aRelease.newMarkdown += "<!--rntype09-end   KNOWN ISSUES." + endTagSuffix;

  // Copy text inbetween ISSUES and CHANGELOG from original markdown.
  aSection = aRelease.findSection("changelog");
  aRelease.newMarkdown += aSection.content;

  // CHANGE LOG (it is really just an end tag for the whole document).
  aRelease.newMarkdown += "<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->\n";

  // Code norwegian letters as html codes, since they are converted automatically by GitHub,
  // which results in a compare mismatch, when new markdown is compared with the old (from GitHub).
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/æ/g,"&aelig;")
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/ø/g,"&oslash;")
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/å/g,"&aring;")
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/Æ/g,"&Aelig;")
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/Ø/g,"&Oslash;")
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/Å/g,"&Aring;")
  
  //console.log(aRelease.newMarkdown + "\n-------------\n");
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


// Needs to put all main logic in an async function, since await is only allowed within async functions.
async function main() {
  var releases = [];
  try {
    await callReleasesRestService(releases);
    //console.log("Releases: " + JSON.stringify(releases));
  }
  catch(err) {
    console.log(err);
    process.exit(1);
  }

  for(var r=0;r<releases.length;r++) {
    try {
      await callReleaseNotesRestService(releases[r].name, releases[r].releaseNotes);
    }
    catch(err){
      console.log(err);
      process.exit(1);
    }
  }

  // For each release,
  // fetch current (original) markdown from GitHub,
  // create new markdown for each type of release note,
  // compare with original,
  // update GitHub if changes.
  var aRelease;
  for(var r = releases.length;--r>=0;) {
    aRelease = releases[r];
    // New releases typically do not contain any release notes yet.
    if (aRelease.releaseNotes.length == 0)
      continue;

    try{
      await readReleaseNoteFileFromGitHub(aRelease);
      //console.log(releases[r].originalMarkdown);
    }
    catch(err){
      console.log(err);
      process.exit(1);
    }

    if (!aRelease.originalExist)
      continue;

    breakOriginalMarkdownIntoSections(aRelease);
    createNewMarkdown(aRelease);

    //saveToFile("D:\\git\\original.md", aRelease.originalMarkdown);
    //saveToFile("D:\\git\\new.md",      aRelease.newMarkdown);
    
    // Not necessary to update GitHub if there isn't any changes.
    if (aRelease.originalMarkdown == aRelease.newMarkdown) {
      console.log(aRelease.name + ": No changes. GitHub not updated.");
      continue;
    }

    try{
      console.log(aRelease.name + ": Changes detected! Updating GitHub...");
      await updateReleaseNoteFileInGitHub(aRelease,"Auto update of " + aRelease.name + " release notes from Actio");
      console.log(aRelease.name + ": ...done.");
    }
    catch(err){
      console.log(err);
      process.exit(1);
    }
  }

  callOperationsSampleRestService();
}

main();
