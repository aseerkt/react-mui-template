const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  entry: ['./app/index.tsx'],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'], modules: ['node_modules'] },
  plugins: [new HtmlWebpackPlugin({ template: './app/index.html' })],
};
