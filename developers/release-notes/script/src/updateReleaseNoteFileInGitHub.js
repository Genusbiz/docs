// ------------------------------------------------------------
function updateReleaseNoteFileInGitHub(
  endpoint,
  release,
  commitMessage,
  ghrepo
) {
  return new Promise((resolve, reject) => {
    ghrepo.updateContents(
      endpoint + release.name + ".md",
      commitMessage,
      release.newMarkdown,
      release.sha,
      function (err, data, headers) {
        resolve(release);
      }
    );
  });
}

module.exports = { updateReleaseNoteFileInGitHub };
