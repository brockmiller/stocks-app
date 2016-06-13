const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: './src/app/main.js',
  output: {
    path: './www',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './www',
    inline: true,
    // hot: true,
    port: 3000
  },
  // resolve: {
  //   extensions: ['', '.scss', '.css', '.js', '.json'],
  //   modulesDirectories: [
  //     'node_modules',
  //     path.resolve(__dirname, './node_modules')
  //   ]
  // },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true })
  ]
};
