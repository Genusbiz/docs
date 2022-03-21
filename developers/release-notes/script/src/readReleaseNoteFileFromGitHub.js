var atob = require("atob");

const { removeNonAsciiChars } = require("./utils/removeNonAsciiChars");

// ------------------------------------------------------------
function readReleaseNoteFileFromGitHub(endpoint, release, ghrepo) {
  return new Promise((resolve, reject) => {
    ghrepo.contents(
      endpoint + release.name + ".md",
      function (err, data, headers) {
        if (err && err.statusCode == 404) {
          // Not Found
          release.originalMarkdown = "";
          release.originalExist = false;
          resolve(release);
          return;
        }
        // Uncertain what the problem is, but high codepoint characters received
        // from Actio transported to GitHub, comes back in a different character
        // encoding (from GitHub). Both should be UTF-8...
        // Removing higher code points as a quick fix...
        release.originalMarkdown = removeNonAsciiChars(atob(data.content));
        release.originalExist = true;
        release.sha = data.sha;
        resolve(release);
      }
    );
  });
}

module.exports = { readReleaseNoteFileFromGitHub };
