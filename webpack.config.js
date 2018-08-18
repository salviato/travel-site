// TGO: Configuration //

var path = require('path'); // TGO Require path. Path is part of the node, do not need to be installed

module.exports = { // TGO: Rule to export the configuration
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"), // TGO: Path need a absolute directory to be found
		filename: "App.js"
	},

	// TGO: Below is the babel integration //
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/, // TGO: Regex for configuration //
				exclude: /node_modules/
			}
		]
	}
}