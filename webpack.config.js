const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // Entry point
  output: {
    filename: "main.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Path to your HTML template
      filename: "index.html", // Output HTML file
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    open: true, // Automatically open browser
    hot: true, // Enable hot reload
  },
};
