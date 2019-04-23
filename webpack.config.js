const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    libraryTarget: "window",
    library: ["ravinder"],
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  // devtool: "source-map",
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./index.html"),
      files: {
        chunks: {
          head: {
            entry: "src/compiledWelcome.js"
          }
        }
      }
    })
  ]
};
