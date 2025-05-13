const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[fullhash]-bundle.js',
    },
    devServer: {
        port: 3666,
        hot: true,
        open: false,
    },
    resolve: {
        extensions: [".js", ".css", ".scss"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            inject: "body",
            title: "Webpack App",
        })
    ]
};
