const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src/favicon.ico'),
                        to: path.resolve(__dirname, 'build')
                    }
                ]
            }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }
        )
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
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