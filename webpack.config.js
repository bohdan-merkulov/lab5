// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/assets/images', // Исходная директория
            to: 'assets/images' // Целевая директория внутри dist
          }
        ]
      }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/rozklad.html',
      filename: 'rozklad.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/news.html',
        filename: 'news.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/photo.html',
        filename: 'photo.html'
      }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      open: true,
      hot: true
  }
};

