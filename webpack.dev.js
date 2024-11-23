const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merg(common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
    watchFiles: ["./src/template.html"],
  },
});