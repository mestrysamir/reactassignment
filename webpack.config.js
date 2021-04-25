const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: ['babel-polyfill', path.join(__dirname, '/src/index.js')]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"],
            }

        ]
    },
    devServer: {
        port: 3000,
        compress: true,
        disableHostCheck: false,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/src/index.html"),
        }),
    ],
}