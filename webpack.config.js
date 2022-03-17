const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js"
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [process.env.NODE_ENV === "production" ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"]
      },
      {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'url-loader',
          options: {
              name: '[name].[ext]?[hash]',
              limit: 20000, //20kb
          }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "Build Date: " + new Date().toLocaleString() + ""
    }),
    new webpack.DefinePlugin({
      TWO: "1+1",
      TWO_STRING: JSON.stringify("1+1"),
      "api.domain": JSON.stringify("http://dev.api.domain.com")
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // http://localhost:3000/dist/index.html 빌드 후에 이 경로로 접근 가능함
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(개발용)" : ""
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true,
              removeComments: true
            }
          : false
    }),
    new CleanWebpackPlugin(),
    // 1. 환경변수에 따라 변경이 아닌 기본적용 방법
    // new MiniCssExtractPlugin({
    //     filename: "[name].css"
    //   })

    // 2. 환경변수에 따라 변경하는 방법
    // 나머지 연산자 활용
    // (intermediate value) is not iterable 에러는 [ ] 대괄호를 안쳐서남
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : [])
  ]
};

