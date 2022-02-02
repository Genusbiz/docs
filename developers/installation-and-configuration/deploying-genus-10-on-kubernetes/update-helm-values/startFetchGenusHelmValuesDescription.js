const atob = require('atob')
const axios = require('axios')

const GITLAB_ACCESS_TOKEN = process.env.GITLAB_ACCESS_TOKEN

const { DefaultAzureCredential } = require('@azure/identity')
const { SecretClient } = require('@azure/keyvault-secrets')

const AZURE_VAULT_NAME = process.env.AZURE_VAULT_NAME
const credential = new DefaultAzureCredential()
const valutClient = new SecretClient(AZURE_VAULT_NAME, credential)

const baseHelmValueDescriptionUrlForGitlab =
	'https://gitlab.com/api/v4/projects/genus%2Fhelm-charts%2Fgenus/repository/files/helm-values-description.md?ref='

const baseHelmValueDescriptionUrlForGithub =
	'developers/installation-and-configuration/deploying-genus-10-on-kubernetes/genus/helm-values-description/genus-'

let githubApi

async function startFetchGenusHelmValuesDescription(api) {
	githubApi = api

	//eslint-disable-next-line
	console.log('Update Genus Helm Values Description in Docs')

	await fetchHelmValueDescriptionFromGitlab('master', '10.14')
	await fetchHelmValueDescriptionFromGitlab('release/10.13', '10.13')
	await fetchHelmValueDescriptionFromGitlab('release/10.12', '10.12')
}

async function fetchHelmValueDescriptionFromGitlab(fromGitlabBranch, toGithubFile) {
	const gitlabAccessToken = await valutClient.getSecret(GITLAB_ACCESS_TOKEN)

	const options = {
		url: baseHelmValueDescriptionUrlForGitlab + fromGitlabBranch,
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
		githubApi.contents(baseHelmValueDescriptionUrlForGithub + toGithubFile + '.md', function (err, data) {
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

	const content = atob(body.content)

	const refactoredContent = content
		.split('./genus/values.yaml')
		.join('../default-helm-values/genus-' + toGithubFile + '.md')

	if (githubContent === refactoredContent) {
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
			baseHelmValueDescriptionUrlForGithub + toGithubFile + '.md',
			'Auto update of helm-values from Gitlab',
			refactoredContent,
			githubSha,
			function () {
				//eslint-disable-next-line
				console.log('Finished pushing updated helm-values to github', toGithubFile)
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

module.exports = { startFetchGenusHelmValuesDescription }
