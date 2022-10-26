module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,png,jpg,gif,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};