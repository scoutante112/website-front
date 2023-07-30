const path = require('path')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const glob = require('glob');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
require('dotenv').config()

const isProduction = false;

module.exports = {
  devtool: 'source-map',
  mode: process.env.environement,
  watchOptions: {
    ignored: /node_modules/,
  },
  performance: {
    hints: false
  },
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './public/assets'),
    filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
    clean: true,
  },
  plugins: [
    isProduction &&  new BrotliPlugin(),
    new WebpackManifestPlugin(),
    isProduction && new ImageminWebpWebpackPlugin(),
    new Dotenv(),
    isProduction && new CompressionPlugin(),
    new LodashModuleReplacementPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`,  { nodir: true }),
    }),
    new LoadablePlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'json',
      generateStatsFile: true,
      statsOptions: {
        source: false,
        chunks: false,
        modules: false,
        chunksSort: 'size',
        assetsSort: 'size',
        excludeAssets: [/hot-update/, /runtime~.+[.]js/],
      },
      statsFilename: 'stats.json',
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ].filter(Boolean),
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
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts']
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 10000,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      isProduction && new TerserPlugin({
        extractComments: true
      })
    ]
  }
}