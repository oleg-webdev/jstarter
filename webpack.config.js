const path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].style.css"
});

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',

	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ 'es2015' ]
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(jpg|png)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img/',
							publicPath: 'src/'
						}
					}
				]
			}
		]
	},
	plugins: [
		extractSass,
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
		// new CleanWebpackPlugin(['dist']),
		// new UglifyJSPlugin()
	]
};