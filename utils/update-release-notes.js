//
// Read release notes from Actio and populate markdown files on docs.genus.no,
// folder developers/release-notes and files like release-notes-2017.5.md
//
// The program is to be run as a scheduled background task in Azure.
// For more info: https://docs.microsoft.com/en-us/azure/app-service/web-sites-create-web-jobs
//  
// Algorithm:
//
// Read all versions from Actio (2017.1, 2017.2 etc).
// For each version that is not expired, starting with the latest one:
//   Read all approved release notes for this version.
//   
// 

var request = require('request'); // https://github.com/request/request

// Read releases
request('http://actio.genus.net/genus/api/public/rest/release/release',
function (error, response, body) {
  if (response && response.statusCode == 200)
    processReleases(body);
  else {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    }
}
);

// ------------------------------------------------------------
/*
  {"Expired":false,
   "ReleaseID":"9439d7c4-328d-43fe-833d-0fdce9e1448e",
   "Name":"2017.2",
   "VersionNumber":"17.200"}
*/
function processReleases(bodyString) {
  var releases = JSON.parse(bodyString);
  var releaseObjects = [];
  for (var r in releases){
    if (!releases.hasOwnProperty(r)) continue;

    aRelease = releases[r];
    var releaseObject = new ReleaseClass(aRelease['Name'],aRelease['ReleaseID'],aRelease['Expired'],aRelease['VersionNumber']);
    releaseObjects.push(releaseObject);
  }
  releaseObjects.sort(function(a,b){return (a.name > b.name) ? 1 :((a.name < b.name) ? -1 : 0);});

  for(var i=0;i<releaseObjects.length;i++) {
    if (releaseObjects[i].expired == false)
      processNotesForOneRelease(releaseObjects[i]);
  }
}

// ------------------------------------------------------------
function readReleaseNotes(releaseName,rnType,processFunction) {
  request("https://actio.genus.net/genus/api/public/rest/release/releaseNotes?Release=" + releaseName + "&ReleaseNoteTypeID=" + rnType,
    function (error, response, body) {
      if (response && response.statusCode == 200) {
        //console.log(body);
        processFunction(body);
      }
      else {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        }
    }
  )
}


// ------------------------------------------------------------
function processNotesForOneRelease(r) {
  // Only handle 2017.5 for now

  if (r.name != "2017.5")
    return;

  readReleaseNotes(r.name,"7", processBugFixes); // 7 = minor new, 8 = bug fixes
}

/*
    "Release Note No":22926,
    "Subject":"Improved errormessage propagated to client on server-exception",
    "Description":"Expanded the exception returned when failing to deserialize an object in a Genus Apps request to include the inner exception message.",
    "Release Note Type ID":"8",
    "Release Note Type":"Bug Fix",
*/


// ------------------------------------------------------------
function processBugFixes(bodyString) {
  //console.log('body:', bodyString);
  var releaseNotes = JSON.parse(bodyString);
  var rnObjects = [];
  for (var i in releaseNotes){
    if (!releaseNotes.hasOwnProperty(i))
      continue;

    aReleaseNote = releaseNotes[i];

    if (aReleaseNote["Release Note State ID"] != 4) // 4 = Published
      continue;

    var rn = new rnClass(aReleaseNote.ID, aReleaseNote['Release Note No'], aReleaseNote['Subject'], "", aReleaseNote['Description']);
    rnObjects.push(rn);
  }

  rnObjects.sort(function(a,b){return (a.no > b.no) ? 1 :((a.no < b.no) ? -1 : 0);});

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
  this.name          = name;
  this.releaseID     = releaseID;
  this.expired       = expired;
  this.versionNumber = versionNumber;
};

// ------------------------------------------------------------
function rnClass(id, no, subject, products, description) {
  // Constructor code
  this.id          = id;
  this.no          = no;
  this.subject     = subject;
  this.products    = products;
  this.description = description;
};
