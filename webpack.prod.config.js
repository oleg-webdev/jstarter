/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoPrefixer = require('autoprefixer');
const flexbugsFixes = require('postcss-flexbugs-fixes');
/* eslint-enable */

module.exports = {
  mode: 'production',
  entry: [
    'babel-polyfill',
    './src/js/main.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id]_[chunkhash]_lazy_partial.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },

      // Styles start

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]_[hash:base64:5]',
                sourceMap: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  flexbugsFixes,
                  autoPrefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9',
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]_[hash:base64:5]',
                sourceMap: false,
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
              },
            },
            'less-loader',
          ],
        }),
      },

      // End of styles


      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: '/',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles/style.css', allChunks: true }),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${__dirname}/src/index.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CleanWebpackPlugin(['dist']),
    // new webpack.optimize.UglifyJsPlugin({ sourceMap: false, minimize: true }),
  ],
};
