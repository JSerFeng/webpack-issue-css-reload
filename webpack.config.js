const Html = require('html-webpack-plugin')

/**@type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new Html()
  ],
  experiments: {
    css: true,
  }
}