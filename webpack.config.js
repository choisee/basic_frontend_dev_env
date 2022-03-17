const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: "[name].js"
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-modules/
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: 'Build Date : ' + new Date().toLocaleString()
        }),
        new HtmlWebpackPlugin({
            template: "/src/index.html",
            templateParameters: {
                env: process.env.NODE_ENV === 'production' ? '' : '(개발용)'
            },
            minify: process.env.NODE_ENV === 'production' ? true : false
        }),
        new CleanWebpackPlugin()
    ]

}