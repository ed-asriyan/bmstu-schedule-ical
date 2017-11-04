/**
 * Created by ed on 06.04.17.
 */

'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname,
        filename: './public/static/bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
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
    plugins: []
};
