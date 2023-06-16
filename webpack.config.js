const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        use: ["babel-loader"],
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        options: {
          presets: ["@babel/env", "@babel/preset-react"],
          babelrcRoots: ["../*"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
