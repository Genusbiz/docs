const atob = require('atob')
const axios = require('axios')

const { DefaultAzureCredential } = require('@azure/identity')
const { SecretClient } = require('@azure/keyvault-secrets')

const AZURE_VAULT_NAME = process.env.AZURE_VAULT_NAME
const GITLAB_ACCESS_TOKEN = process.env.GITLAB_ACCESS_TOKEN

const credential = new DefaultAzureCredential()
const valutClient = new SecretClient(AZURE_VAULT_NAME, credential)

const baseHelmValueFilesUrlForGitlab =
	'https://gitlab.com/api/v4/projects/genus%2Fhelm-charts%2Fgenus-operator/repository/files/genus-operator%2Fvalues.yaml?ref='

const baseHelmValueFilesUrlForGithub =
	'developers/installation-and-configuration/deploying-genus-10-on-kubernetes/genus-operator/default-helm-values/genus-operator-'

let githubApi

async function startFetchGenusOperatorHelmValues(api) {
	githubApi = api

	//eslint-disable-next-line
	console.log('Update Default Genus Operator Helm Values in Docs')

	await fetchHelmValuesFromGitlab('3.0.0')
}

async function fetchHelmValuesFromGitlab(fromGitlabTag) {
	const gitlabAccessToken = await valutClient.getSecret(GITLAB_ACCESS_TOKEN)

	const options = {
		url: baseHelmValueFilesUrlForGitlab + fromGitlabTag,
		method: 'get',
		headers: {
			'PRIVATE-TOKEN': gitlabAccessToken.value,
		},
	}

	const response = await axios(options)
	const body = response.data

	const { githubSha, githubContent } = await new Promise((resolve) => {
		githubApi.contents(baseHelmValueFilesUrlForGithub + fromGitlabTag + '.md', function (err, data) {
			if (!data) {
				resolve({})
				return
			}
			resolve({ githubSha: data.sha, githubContent: atob(data.content) })
		})
	})

	if (!githubSha || !githubContent) {
		//eslint-disable-next-line
		console.log('1. Release ' + fromGitlabTag + ' not found in docs. Most likely not created')
		return
	}

	const formattedBodyContet = '```yaml\n' + atob(body.content) + '\n```'

	if (githubContent === formattedBodyContet) {
		//eslint-disable-next-line
		console.log('2. Content is equal')
		return
	}

	if (body.blob_id === githubSha) {
		//eslint-disable-next-line
		console.log('3. SHA is equal')
		return
	}

	await new Promise((resolve) => {
		githubApi.updateContents(
			baseHelmValueFilesUrlForGithub + fromGitlabTag + '.md',
			'Auto update of helm-values from Gitlab',
			formattedBodyContet,
			githubSha,
			function () {
				//eslint-disable-next-line
				console.log('Finished pushing updated helm-values to github')
				resolve()
			}
		)
	})
}

module.exports = { startFetchGenusOperatorHelmValues }
