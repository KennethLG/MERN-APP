const path = require('path');

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
  	rules: [
  		{
  			use: "babel-loader",
  			test: /\.js$/,
  			exclude: /node_modules/
  		},

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
  	]
  }
};