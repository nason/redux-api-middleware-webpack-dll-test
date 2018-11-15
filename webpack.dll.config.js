// Build a DLL containing redux-api-middleware

const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // "production"
  context: __dirname,
  entry: [
    "redux-api-middleware"
  ],
  output: {
    filename: "vendor.dll.js",
    path: path.resolve(__dirname, "dist"),
    library: "vendor_lib_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "vendor_lib_[hash]",
      path: path.resolve(__dirname, "dist/vendor-manifest.json")
    })
  ]
};