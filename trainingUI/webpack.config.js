var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const configDev = require('./src/config-dev.json');
const configProd = require('./src/config-dev.json');

const node_env = process.env.NODE_ENV;
const isProduction = node_env === 'production';
const config = isProduction ? configProd : configDev;

module.exports = {
    mode: node_env,
    performance: {
        hints: isProduction ? "warning" : false
    },
    entry: [
        'react-hot-loader/patch',
        "./index.js"
    ],
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        contentBase: './',
        //stats: 'errors-only',
        open: true,
        port: config.port,
        compress: true,
        hot: true,
        proxy: {
            '/': {
                target: config.backendUrl,
                secure: false,
                prependPath: false
            }
        },
        publicPath: config.baseUrl,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            config: JSON.stringify(config)
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            include: /src/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['env', 'stage-0', 'react']
                }
            }
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            test: /\.(jpg|png|gif|svg)$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }, {
            test: /\.scss$/,
            include: /src/,
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
        }
        ]
    }
};