// ------------------------------------------------------------
function releaseNoteClass(id, no, type, subject, products, description) {
  // Constructor code
  this.id = id;
  this.no = no;
  this.type = type;
  this.subject = subject;
  this.products = products;
  this.description = description;
  this.sortfield = type + "#" + no;
}

// ------------------------------------------------------------
var request = require("request");

// Call Actio REST service to read all release notes for one release.
function callReleaseNotesRestService(endpoint, releaseNotes) {
  return new Promise((resolve, reject) => {
    request(endpoint, function (error, response, body) {
      if (response && response.statusCode === 204) {
        resolve(releaseNotes);
        return;
      }

      if (response && response.statusCode == 200) {
        if (body == "") {
          resolve(releaseNotes);
          return;
        }
        //saveToFile("d:/git/body.txt", body);
        var candidates = JSON.parse(body);
        for (var c in candidates) {
          if (!candidates.hasOwnProperty(c)) continue;

          var aReleaseNote = candidates[c];
          if (aReleaseNote["releaseNoteStateID"] != 4)
            // 4 = Published
            continue;

          var subject = "";
          if (aReleaseNote["subject"] != null)
            subject = aReleaseNote["subject"].trim();

          var description = "";
          if (aReleaseNote["description"] != null)
            description = aReleaseNote["description"].trim();

          var rn = new releaseNoteClass(
            aReleaseNote["releaseNoteID"],
            aReleaseNote["releaseNoteNo"],
            aReleaseNote["releaseNoteTypeID"],
            subject,
            aReleaseNote["coreProducts"],
            description
          );
          releaseNotes.push(rn);
        }

        releaseNotes.sort(function (a, b) {
          return a.sortfield > b.sortfield
            ? 1
            : a.sortfield < b.sortfield
            ? -1
            : 0;
        });

        resolve(releaseNotes);
      } else {
        reject(error);
      }
    });
  });
}

module.exports = { callReleaseNotesRestService };
