require('dotenv').config()

const Github = require('octonode')
const { DefaultAzureCredential } = require('@azure/identity')
const { SecretClient } = require('@azure/keyvault-secrets')

const { startFetchGenusHelmValuesDescription } = require('./startFetchGenusHelmValuesDescription')
const { startFetchGenusHelmValues } = require('./startFetchGenusHelmValues')
const { startFetchGenusOperatorHelmValues } = require('./startFetchGenusOperatorHelmValues')
const { startFetchGenusOperatorHelmValuesDescription } = require('./startFetchGenusOperatorHelmValuesDescription')

const vaultUrl = process.env.AZURE_VAULT_NAME
const credential = new DefaultAzureCredential()
const valutClient = new SecretClient(vaultUrl, credential)

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN

async function initialize() {
	const githubAccessToken = await valutClient.getSecret(GITHUB_ACCESS_TOKEN)

	// Log into github.
	const client = Github.client(githubAccessToken.value)

	// Get ref to repos.
	const githubApi = client.repo('genusbiz/docs')

	//Update docs for Genus
	await startFetchGenusHelmValues(githubApi)
	await startFetchGenusHelmValuesDescription(githubApi)

	//Update docs for Genus Operator
	await startFetchGenusOperatorHelmValues(githubApi)
	await startFetchGenusOperatorHelmValuesDescription(githubApi)
}

initialize().then(() => {
	//eslint-disable-next-line
	console.log('Finished')
})
