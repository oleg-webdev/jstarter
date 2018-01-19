const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoPrefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/js/main.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id]_lazy_partial.js',
    publicPath: '',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      jQuery: 'jquery/src/jquery',
      $: 'jquery/src/jquery',
      // yarn add scrollmagic gsap
      // 'TweenLite': path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      // 'TweenMax': path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      // 'TimelineLite': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      // 'TimelineMax': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      // 'ScrollMagic': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      // 'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      // 'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: { compact: false },
      },
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
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  autoPrefixer({
                    browsers: [
                      '> 1%',
                      'last 2 versions',
                    ],
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
                sourceMap: true,
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=false',
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader', // file-loader
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: '',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
    // new webpack.ProvidePlugin({
    // $: 'jquery',
    // jQuery: 'jquery',
    // 'window.jQuery': 'jquery',
    // Popper: ['popper.js', 'default'],
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${__dirname}/src/index.hbs`,
    }),
    new CleanWebpackPlugin(['dist']),
  ],
};
