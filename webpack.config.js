const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app/main.js'
  ],
  output: {
    path: './www',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './www',
    inline: true,
    hot: true,
    port: 3000
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0']
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /(\.scss|\.css)$/,
        exclude: /chartist/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      },
      {
        test: /(\.scss|\.css)$/,
        include: /chartist/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader!postcss-loader')
      }
    ]
  },
  sassLoader: {
    data: '@import "' + path.resolve(__dirname, 'app/styles/_theme.scss') + '";'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css', { allChunks: true })
  ],
  postcss: function () {
    return [precss, autoprefixer];
  }
};
