module.exports = {
  entry: './src//js/index.jsx',
  output: {
    path: '/public/js',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  }
}