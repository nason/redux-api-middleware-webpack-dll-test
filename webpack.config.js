// Consume redux-api-middleware in a DLL

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  mode: "development", // || "production",
  entry: {
    main: ["./index.js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest: require("./dist/vendor-manifest.json")
    }),
    new HtmlWebpackPlugin({
      title: 'redux-api-middleware webpack dll test',
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './dist/vendor.dll.js'),
    }),
  ]
};

