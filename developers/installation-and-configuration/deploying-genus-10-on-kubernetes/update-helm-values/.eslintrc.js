module.exports = {
	extends: ['@genusbiz/eslint-config'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true,
		},
	},
	env: {
		es6: true,
		browser: true,
		node: true,
		mocha: true,
		jest: true,
	},
}
