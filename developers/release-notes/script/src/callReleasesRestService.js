var request = require("request");

// ------------------------------------------------------------
function ReleaseClass(name, releaseID, expired, versionNumber) {
  // Constructor code
  this.name = name;
  this.releaseID = releaseID;
  this.expired = expired;
  this.versionNumber = versionNumber;
  this.releaseNotes = []; // Array of relaseNoteClass.
  this.originalMarkdown = "";
  this.originalExist = false;
  this.originalSections = []; // Array of mdSection.
  this.newMarkdown = "";
  this.sha;

  this.findSection = function (sectionName) {
    let resultArray = this.originalSections.filter(
      (section) => section.name == sectionName
    );
    if (resultArray.length > 0) return resultArray[0];
    console.log(
      "ReleaseClass.findSection: Unable to find section " +
        sectionName +
        " for " +
        this.name
    );
  };
}

// ------------------------------------------------------------
// Call Actio REST service to read available releases (2017.1, 2017.2, ...)
function callReleasesRestService(endpoint, releases) {
  return new Promise((resolve, reject) => {
    request(endpoint, function (error, response, body) {
      if (response && response.statusCode == 200) {
        var candidates = JSON.parse(body);

        for (var c in candidates) {
          if (!candidates.hasOwnProperty(c)) continue;

          var aRelease = candidates[c];

          if (aRelease["expired"] == false) {
            var releaseObject = new ReleaseClass(
              aRelease["version"].trim(),
              aRelease["productVersionId"],
              aRelease["expired"],
              aRelease["megaserviceVersion"]
            );
            releases.push(releaseObject);
          }
        }
        releases.sort(function (a, b) {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        });
        resolve(releases);
      } else {
        reject(error);
      }
    });
  });
}

module.exports = { callReleasesRestService };
