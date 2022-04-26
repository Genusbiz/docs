require("dotenv").config();

var github = require("octonode");

const { createNewMarkdown } = require("./src/createNewMarkdown");

const {
  readReleaseNoteFileFromGitHub,
} = require("./src/readReleaseNoteFileFromGitHub");

const {
  updateReleaseNoteFileInGitHub,
} = require("./src/updateReleaseNoteFileInGitHub");

const {
  breakOriginalMarkdownIntoSections,
} = require("./src/breakOriginalMarkdownIntoSections");

const {
  callReleaseNotesRestService,
} = require("./src/callReleaseNotesRestService");

const { callReleasesRestService } = require("./src/callReleasesRestService");

const {
  callOperationsSampleRestService,
} = require("./src/callOperationsSampleRestService");

const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const credential = new DefaultAzureCredential();

const url = process.env.AZURE_VAULT_NAME;
const valutClient = new SecretClient(url, credential);
const secretName = process.env.AZURE_SECRET_NAME;

init();

async function init() {
  const latestSecret = await valutClient.getSecret(secretName);

  // Log into github.
  var client = github.client(latestSecret.value);

  // Get ref to repos.
  const ghrepo = client.repo("genusbiz/docs");

  console.log("Update release notes for Genus");

  await updateGenusDocs(
    ghrepo,
    "genus",
    "developers/release-notes/genus/release-notes-"
  );

  await updateGenusDocs(
    ghrepo,
    "genus",
    "developers/release-notes/genus/older/release-notes-"
  );

  console.log("Update release notes for Genus Operator");

  await updateGenusDocs(
    ghrepo,
    "genus-operator",
    "developers/release-notes/genus-operator/release-notes-"
  );

  await updateGenusDocs(
    ghrepo,
    "genus-operator",
    "developers/release-notes/genus-operator/older/release-notes-"
  );
}

async function updateGenusDocs(ghrepo, product, docsFilePath) {
  var releases = [];

  try {
    await callReleasesRestService(
      "https://actio.genus.net/-/rest/public/release/products/" +
        product +
        "/versions",
      releases
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  for (var r = 0; r < releases.length; r++) {
    try {
      await callReleaseNotesRestService(
        "https://actio.genus.net/-/rest/public/release/products/" +
          product +
          "/versions/" +
          releases[r].name +
          "/releasenotes",
        releases[r].releaseNotes
      );
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  // For each release,
  // fetch current (original) markdown from GitHub,
  // create new markdown for each type of release note,
  // compare with original,
  // update GitHub if changes.
  var aRelease;

  for (var r = releases.length; --r >= 0; ) {
    aRelease = releases[r];
    // New releases typically do not contain any release notes yet.
    if (aRelease.releaseNotes.length == 0) continue;

    try {
      await readReleaseNoteFileFromGitHub(docsFilePath, aRelease, ghrepo);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }

    if (!aRelease.originalExist) continue;

    breakOriginalMarkdownIntoSections(aRelease);
    createNewMarkdown(aRelease);

    // Not necessary to update GitHub if there isn't any changes.
    if (aRelease.originalMarkdown === aRelease.newMarkdown) {
      console.log(aRelease.name + ": No changes. GitHub not updated.");
      continue;
    }

    try {
      console.log(aRelease.name + ": Changes detected! Updating GitHub...");
      await updateReleaseNoteFileInGitHub(
        docsFilePath,
        aRelease,
        "Auto update of " + aRelease.name + " release notes from Actio",
        ghrepo
      );
      console.log(aRelease.name + ": ...done.");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  callOperationsSampleRestService();
}
