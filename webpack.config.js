var webpack = require('webpack');

module.exports = {
  entry: [ 
    "./src/entry.js"
  ],
  output: {
    path: __dirname,
    filename: './src/assets/js/build.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [/*{
      test: /\.jsx?$/,
      loader: 'babel-loader!jsx-loader?harmony'
    }*/
     {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
