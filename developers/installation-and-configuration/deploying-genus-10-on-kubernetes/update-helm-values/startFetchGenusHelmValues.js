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

	await fetchHelmValuesFromGitlab('master', '11.1')
	await fetchHelmValuesFromGitlab('release/11.0', '11.0')
	await fetchHelmValuesFromGitlab('release/10.23', '10.23')

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

	let response = undefined

	try {
		response = await axios(options)
	} catch (e) {
		//eslint-disable-next-line
		console.log('Failed fetching from gitlab: ', fromGitlabBranch)
		return
	}

	if (!response) {
		//eslint-disable-next-line
		console.log('Failed fetching from gitlab: ', fromGitlabBranch)
		return
	}

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
	}).catch((e) => {
		//eslint-disable-next-line
		console.log('Failed updating helm-values for release: ', toGithubFile)
		//eslint-disable-next-line
		console.log(e)
	})
}

module.exports = { startFetchGenusHelmValues }
