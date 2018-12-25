const path  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: "production",
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename:'[name].[hash].js',
    path: path.join(__dirname, '../dist')
  },
  module:{
    rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
		
		
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // 在配置中添加插件
  plugins: [
    new HtmlWebpackPlugin({
      title:"react",
      template:path.join(__dirname,"../client/index.html")
    })
  ]
}