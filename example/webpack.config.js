var path = require('path');

module.exports = {

	devtool: 'inline-source-map',

	entry: path.resolve(__dirname, 'index.js'),

	output: {
		path: path.resolve(__dirname, 'example'),
		filename: 'build.js'
	},

	resolve: {
		alias: {
			'taucharts-react': '../src/index.js'
		}
	},

	externals: [
		{
			xmlhttprequest: "{XMLHttpRequest:XMLHttpRequest}"
		}
	],

	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
		]
	}

};
