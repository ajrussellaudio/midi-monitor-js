const path = require('path');

module.exports = {
  entry: './src/midi-monitor.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}