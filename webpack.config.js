const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(path);

module.exports = {
  mode: "production",
  // file đầu vào
  entry: {
    app: path.resolve("./src/index.js")
  },
  //file đầu ra
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", //file name auto generate into dist folder after build (you can change name), [name].[contenthash].js === [app].[auto generated].js
  },
  //config
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack App", // auto generate file html 
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
  devServer: {
    static: {
      directory: "dist", //relative path -> index.html
    },
    compress: true, // open zip  files -> reduce size
    port: 3000, //default port = 8080
    open: true, //auto open website when running
    hot: true, // reload quickly
    historyApiFallback: true, //avoid error when use SPA + History API HTML5
  },
};
