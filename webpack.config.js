const path = require('path')
module.exports = {
  entry: './src/lib/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'vue-toast-demo.js',
    libraryTarget: 'umd', // 指定打包文件格式(各种格式)
    library: 'VueToastDemo' // 打包出来的名字
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      exclude: /node-modules/,
      options: {
        loaders: {
          scss: 'style-loader!css-loader!sass-loader'
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src'),
      exclude: /node-modules/
    }]
  },
  plugins: [

  ]
}