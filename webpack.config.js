/**
 * Created by ed on 06.04.17.
 */

'use strict';

const path = require('path');

var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'app', 'index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(s)?css$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:
                            {
                                minimize: true
                            }
                    },
                    {
                        loader: "sass-loader",
                        options:
                            {
                                minimize: true
                            }
                    }
                ]
            },
        ]
    },
    externals: {
        fs: 'fs',
    },
    plugins: [
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'app/index.html'),
            inject: true,
            chunksSortMode: 'dependency',
        }),
    ]
};
