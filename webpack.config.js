const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: {
      app:'./src/index.js'
  },
  output: {
    filename: 'bundle.js',     
    path: '/dist'    
  },
  plugins:[
    
     new htmlWebpackPlugin({
         template: path.join('./src/index.html'),
         filename:'index.html'
     }),
     new VueLoaderPlugin()
  ],
  devServer:{
     headers:{
       'Access-Control-Allow-Origin':'*'
     },
     hotOnly:false,
     disableHostCheck:true
  },
  module: {
    rules: [
      {
        test:/\.vue$/,use:'vue-loader'
      },
      {
        test:/\.js$/,use:'babel-loader',exclude:/node_modules/
      },
      {
        test:/\.css$/,use:['style-loader','css-loader']
      },
      {
        test:/\.less$/,use:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8844&name=[hash:8]-[name].[ext]'
      },
      {
        test:/\.(ttf|eot|avg|woff)$/,use:'url-loader'
      },
      // {
      //   test: /vue-preview.src.*?js$/,
      //   loader: 'babel-loader'
      // },
    ]
  }
}
