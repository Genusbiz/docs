const atob = require('atob')
const axios = require('axios')

const { DefaultAzureCredential } = require('@azure/identity')
const { SecretClient } = require('@azure/keyvault-secrets')

const AZURE_VAULT_NAME = process.env.AZURE_VAULT_NAME
const GITLAB_ACCESS_TOKEN = process.env.GITLAB_ACCESS_TOKEN

const credential = new DefaultAzureCredential()
const valutClient = new SecretClient(AZURE_VAULT_NAME, credential)

const baseHelmValueFilesUrlForGitlab =
	'https://gitlab.com/api/v4/projects/genus%2Fhelm-charts%2Fgenus/repository/files/genus%2Fvalues.yaml?ref='

const baseHelmValueFilesUrlForGithub =
	'developers/installation-and-configuration/deploying-genus-10-on-kubernetes/genus/default-helm-values/genus-'

let githubApi

async function startFetchGenusHelmValues(api) {
	githubApi = api

	//eslint-disable-next-line
	console.log('Update Default Genus Helm Values in Docs')

	await fetchHelmValuesFromGitlab('master', '10.7')
	await fetchHelmValuesFromGitlab('release/10.6', '10.6')
	await fetchHelmValuesFromGitlab('release/10.5', '10.5')
	await fetchHelmValuesFromGitlab('release/10.4', '10.4')
	await fetchHelmValuesFromGitlab('release/10.3', '10.3')
	await fetchHelmValuesFromGitlab('release/10.2', '10.2')
}

async function fetchHelmValuesFromGitlab(fromGitlabBranch, toGithubFile) {
	const gitlabAccessToken = await valutClient.getSecret(GITLAB_ACCESS_TOKEN)

	const options = {
		url: baseHelmValueFilesUrlForGitlab + fromGitlabBranch,
		method: 'get',
		headers: {
			'PRIVATE-TOKEN': gitlabAccessToken.value,
		},
	}

	const response = await axios(options)
	const body = response.data

	const { githubSha, githubContent } = await new Promise((resolve) => {
		githubApi.contents(baseHelmValueFilesUrlForGithub + toGithubFile + '.md', function (err, data) {
			if (!data) {
				resolve({})
				return
			}
			resolve({ githubSha: data.sha, githubContent: atob(data.content) })
		})
	})

	if (!githubSha || !githubContent) {
		//eslint-disable-next-line
		console.log('1. Release ' + toGithubFile + ' not found in docs. Most likely not created')
		return
	}

	const formattedBodyContet = '```yaml\n' + atob(body.content) + '\n```'

	if (githubContent === formattedBodyContet) {
		//eslint-disable-next-line
		console.log('2. Content is equal', toGithubFile)
		return
	}

	if (body.blob_id === githubSha) {
		//eslint-disable-next-line
		console.log('3. SHA is equal', toGithubFile)
		return
	}

	await new Promise((resolve) => {
		githubApi.updateContents(
			baseHelmValueFilesUrlForGithub + toGithubFile + '.md',
			'Auto update of helm-values from Gitlab',
			formattedBodyContet,
			githubSha,
			function () {
				//eslint-disable-next-line
				console.log('Finished pushing updated helm-values to github: ', toGithubFile)
				resolve()
			}
		)
	})
}

module.exports = { startFetchGenusHelmValues }
