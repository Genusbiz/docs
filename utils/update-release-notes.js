//
// Read release notes from Actio and populate markdown files on docs.genus.no,
// folder developers/release-notes and files like release-notes-2017.5.md
//
// The program is to be run as a scheduled background task in Azure.
// For more info: https://docs.microsoft.com/en-us/azure/app-service/web-sites-create-web-jobs
//  

var request = require('request');
var github  = require('octonode');
var atob = require('atob');

// Read and check command line arguments.
if (process.argv.length != 4) {
  console.log("usage: node update-release-notes.js git-username git-password");
  process.exit(1);
}

var gitUsername = process.argv[2];
var gitPassword = process.argv[3];

// Log into github.
var client = github.client({
  username: gitUsername,
  password: gitPassword
});

// Get ref to repos.
var ghrepo = client.repo('genusbiz/docs');


// ------------------------------------------------------------
// Call Actio REST service to read available releases (2017.1, 2017.2, ...)
function callReleasesRestService(releases) {
  return new Promise((resolve, reject) =>{
    request('http://actio.genus.net/genus/api/public/rest/release/release',
    function (error, response, body) {
      if (response && response.statusCode == 200) {
        var candidates = JSON.parse(body);
        for (var c in candidates){
          if (!candidates.hasOwnProperty(c)) continue;
      
          var aRelease = candidates[c];
          if (aRelease['Expired'] == false) {
            var releaseObject = new ReleaseClass(aRelease['Name'],aRelease['ReleaseID'],aRelease['Expired'],aRelease['VersionNumber']);
            releases.push(releaseObject);
          }
        }
        releases.sort(function(a,b){return (a.name > b.name) ? 1 :((a.name < b.name) ? -1 : 0);});
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
      
          var rn = new releaseNoteClass(aReleaseNote.ID,
                                        aReleaseNote['Release Note No'],
                                        aReleaseNote['Release Note Type ID'],
                                        aReleaseNote['Subject'],
                                        aReleaseNote['Core products'],
                                        aReleaseNote['Description']);
          releaseNotes.push(rn);
        }
      
        releaseNotes.sort(function(a,b){return (a.sortfield > b.sortfield) ? 1 :((a.sortfield < b.sortfield) ? -1 : 0);});
              
        resolve(releaseNotes);
      }
      else
        reject(error);
    }
  )
  });
}

// ------------------------------------------------------------
function readReleaseNoteFileFromGitHub() {
  ghrepo.contents('developers/release-notes/release-notes-2017.5.md', 
    function(err,data,headers){
      if (headers && headers.status == "200 OK") {

        console.log("data: " + JSON.stringify(data));
        console.log("-----------");
        console.log(atob(data.content));
      }
      else {
        console.log("error: " + err);
        console.log("headers:" + headers);
      }
    }
  );
}


// Needs to put all main logic in an async function, since await is only allowed within async functions.
async function main() {
  var releases = [];
  try {
    await callReleasesRestService(releases);
    console.log("Releases: " + JSON.stringify(releases));
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

  // For each release, fetch current (original) markdown from GitHub,
  // create new markdown for each type of release note,
  // compare with original,
  // update GitHub if changes.
  for(var r = releases.length;--r>=0;) {
    // New releases typically do not contain any release notes yet.
    if (releases[r].releaseNotes.length == 0)
      continue;
    console.log("");
    console.log("RELEASE " + releases[r].name);
    console.log(JSON.stringify(releases[r].releaseNotes));
    console.log("");
    console.log("");
    console.log("");
  }
}

main();


// ------------------------------------------------------------
function readReleaseNoteFileFromGitHub() {
  ghrepo.contents('developers/release-notes/release-notes-2017.5.md', 
    function(err,data,headers){
      if (headers && headers.status == "200 OK") {

        console.log("data: " + JSON.stringify(data));
        console.log("-----------");
        console.log(atob(data.content));
      }
      else {
        console.log("error: " + err);
        console.log("headers:" + headers);
      }
    }
  );
}

// ------------------------------------------------------------
function processBugFixes(bodyString) {
  //console.log('body:', bodyString);
  var subjectLine = "";

  for(var k=0;k<rnObjects.length;k++) {
    console.log("<!--ID " + rnObjects[k].id + " -->");
    subjectLine = "**#" + rnObjects[k].no + " " + rnObjects[k].subject + "**";
    if (rnObjects[k].products != "")
      subjectLine += " (" + rnObjects[k].products + ")";
    console.log(subjectLine);
    if (rnObjects[k].description)
      console.log(rnObjects[k].description);
    console.log("");
  }
};

// ------------------------------------------------------------
function ReleaseClass(name, releaseID, expired, versionNumber) {
  // Constructor code
  this.name             = name;
  this.releaseID        = releaseID;
  this.expired          = expired;
  this.versionNumber    = versionNumber;
  this.releaseNotes     = [];
  this.originalMarkdown = "";
  this.newMarkdown      = "";
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
