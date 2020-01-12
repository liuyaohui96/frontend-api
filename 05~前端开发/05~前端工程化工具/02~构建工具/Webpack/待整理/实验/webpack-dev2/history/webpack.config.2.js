const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  mode: 'production',

  devServer: {
    port: 5000,
    progress: true, // 打包记录条
    contentBase: './dist', // 启动的路径
    open: true, // 自动打开浏览器
    compress: true // gzip 压缩
  },
  devtool: 'eval-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300, // 文件改变rebuild之前的延迟
    poll: 1000, // 每秒检查文件是否变化
    ignored: /node_modules/ // 不需要监控的文件
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'other.html'
    })
  ]
};
