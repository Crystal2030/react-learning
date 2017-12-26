var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: path.resolve(__dirname, "./src/js/index.js"),
	output: {
		path: path.resolve(__dirname, './lib/'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			}
		}]
	},
	resolve: {
		extensions: ['.js', '.css', 'json']
	},
};