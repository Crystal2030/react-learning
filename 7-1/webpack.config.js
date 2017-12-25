var webpack = require('webpack');
var path = require('path');

console.log('----',__dirname)

module.exports = {
	entry: './src/js/index.js',
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
	output: {
		path: __dirname+'/src/js',
		filename: 'bundle.js'
	}
}