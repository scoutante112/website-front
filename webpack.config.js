const path = require('path')
const Dotenv = require('dotenv-webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
require('dotenv').config()

const isProduction = (process.env.environement === 'production')
module.exports = {
  mode: process.env.environement,
  watchOptions: {
    ignored: /node_modules/,
  },
  performance: {
    hints: false
  },
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: isProduction ? 'bundle.js' : 'bundle.js'
  },
  plugins: [
    new Dotenv(),
    new ESLintPlugin({
      files: 'src/**/*.tsx',
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts']
  }
}
