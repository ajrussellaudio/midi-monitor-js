const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/midi-monitor.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: "MIDI Monitor"
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}