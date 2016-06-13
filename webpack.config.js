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
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
