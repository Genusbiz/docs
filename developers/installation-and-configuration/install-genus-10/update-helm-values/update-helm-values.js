require("dotenv").config();

const atob = require("atob");
const Github = require("octonode");
const axios = require("axios");
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const credential = new DefaultAzureCredential();

const url = process.env.AZURE_VAULT_NAME;
const valutClient = new SecretClient(url, credential);
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
const GITLAB_ACCESS_TOKEN = process.env.GITLAB_ACCESS_TOKEN;

let githubApi;

async function initialize() {
  const githubAccessToken = await valutClient.getSecret(GITHUB_ACCESS_TOKEN);

  // Log into github.
  var client = Github.client(githubAccessToken.value);

  // Get ref to repos.
  githubApi = client.repo("genusbiz/docs");

  await startFetchHelmValuesDescription();

  await startFetchHelmValues();
}

initialize().then(() => {
  console.log("Finished");
});

const baseHelmValueDescriptionUrlForGitlab =
  "https://gitlab.com/api/v4/projects/genus%2Fhelm-charts%2Fgenus-release/repository/files/helm-values-description.md?ref=";

const baseHelmValueDescriptionUrlForGithub =
  "developers/installation-and-configuration/install-genus-10/value-files/genus-";

async function startFetchHelmValuesDescription() {
  await fetchHelmValueDescriptionFromGitlab("master", "10.4");
  await fetchHelmValueDescriptionFromGitlab("release/10.3", "10.3");
  await fetchHelmValueDescriptionFromGitlab("release/10.2", "10.2");
}

async function fetchHelmValueDescriptionFromGitlab(
  fromGitlabBranch,
  toGithubFile
) {
  const gitlabAccessToken = await valutClient.getSecret(GITLAB_ACCESS_TOKEN);

  const options = {
    url: baseHelmValueDescriptionUrlForGitlab + fromGitlabBranch,
    method: "get",
    headers: {
      "PRIVATE-TOKEN": gitlabAccessToken.value,
    },
  };

  const response = await axios(options);
  const body = response.data;

  const { githubSha, githubContent } = await new Promise((resolve, reject) => {
    githubApi.contents(
      baseHelmValueDescriptionUrlForGithub + toGithubFile + ".md",
      function (err, data, headers) {
        resolve({ githubSha: data.sha, githubContent: atob(data.content) });
      }
    );
  });

  const content = atob(body.content);

  const refactoredContent = content
    .split("./genus/values.yaml")
    .join("./genus-values/genus-" + toGithubFile + ".md");

  if (githubContent === refactoredContent) {
    console.log("1. Content is equal");
    return;
  }

  if (body.blob_id === githubSha) {
    console.log("1. SHA is equal");
    return;
  }

  await new Promise((resolve, reject) => {
    githubApi.updateContents(
      baseHelmValueDescriptionUrlForGithub + toGithubFile + ".md",
      "Auto update of helm-values from Gitlab",
      refactoredContent,
      githubSha,
      function (err, data, headers) {
        console.log("Finished pushing updated helm-values to github");
        resolve();
      }
    );
  });
}

const baseHelmValueFilesUrlForGitlab =
  "https://gitlab.com/api/v4/projects/genus%2Fhelm-charts%2Fgenus-release/repository/files/genus%2Fvalues.yaml?ref=";

const baseHelmValueFilesUrlForGithub =
  "developers/installation-and-configuration/install-genus-10/value-files/genus-values/genus-";

async function startFetchHelmValues() {
  await fetchHelmValuesFromGitlab("master", "10.4");
  await fetchHelmValuesFromGitlab("release/10.3", "10.3");
  await fetchHelmValuesFromGitlab("release/10.2", "10.2");
}

async function fetchHelmValuesFromGitlab(fromGitlabBranch, toGithubFile) {
  const gitlabAccessToken = await valutClient.getSecret(GITLAB_ACCESS_TOKEN);

  const options = {
    url: baseHelmValueFilesUrlForGitlab + fromGitlabBranch,
    method: "get",
    headers: {
      "PRIVATE-TOKEN": gitlabAccessToken.value,
    },
  };

  const response = await axios(options);
  const body = response.data;

  const { githubSha, githubContent } = await new Promise((resolve, reject) => {
    githubApi.contents(
      baseHelmValueFilesUrlForGithub + toGithubFile + ".md",
      function (err, data, headers) {
        resolve({ githubSha: data.sha, githubContent: atob(data.content) });
      }
    );
  });

  const formattedBodyContet = "```yaml\n" + atob(body.content) + "\n```";

  if (githubContent === formattedBodyContet) {
    console.log("2. Content is equal");
    return;
  }

  if (body.blob_id === githubSha) {
    console.log("2. SHA is equal");
    return;
  }

  await new Promise((resolve, reject) => {
    githubApi.updateContents(
      baseHelmValueFilesUrlForGithub + toGithubFile + ".md",
      "Auto update of helm-values from Gitlab",
      formattedBodyContet,
      githubSha,
      function (err, data, headers) {
        console.log("Finished pushing updated helm-values to github");
        resolve();
      }
    );
  });
}
