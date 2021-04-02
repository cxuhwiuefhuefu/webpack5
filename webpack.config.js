const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const webpack = require("webpack");
module.exports = {
    mode: 'production',
    entry: "./index.js",
    output: {
        filename:  "build.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
    ],
    devServer: {
        hot: true,
        contentBase: './plulic'
    }
}