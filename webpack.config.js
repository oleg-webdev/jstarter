const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

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
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						attrs: [':data-src']
					}
				}
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
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default'],
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		// new CleanWebpackPlugin(['dist']),
		// new UglifyJSPlugin()
	]
};