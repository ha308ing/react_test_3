const path = require('path');

module.exports = {
  entry: './js/index.js',
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, './publish/'),
    filename: 'colors.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        path.resolve(__dirname, "node_modules")
      ],
      include: [
        path.resolve(__dirname, "js")
      ],
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"]
      }
    }]
  }
};
