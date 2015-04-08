var path = require('path');
module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'source'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.json$/, loader: 'json' }
    ]
  }
};
