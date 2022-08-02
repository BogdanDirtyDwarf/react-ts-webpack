const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.css'],
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles')
        }
    },
    devServer: {
        port: 1337
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpeg|svg|jpg|gif|webp)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/i,
                use: ['csv-loader']
            }
        ]
    }
}