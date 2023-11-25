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
const SitemapWebpackPlugin = require('sitemap-webpack-plugin').default; // Assurez-vous d'importer la version par défaut

require('dotenv').config()

const url = 'https://privatewebsite.bagou450.com'
const urls = [
  { path: '/', priority: 1.0 },
  { path: '/products', priority: 0.99 },
  { path: '/blog', priority: 0.8 },
  { path: '/licenses', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
  { path: '/login', priority: 0.2 },
  { path: '/tos', priority: 0.2 },
  { path: '/pp', priority: 0.2 },
  { path: '/rp', priority: 0.2 },
  { path: '/lm', priority: 0.2 },
  { path: '/product/phpmyadmin-button', priority: 0.75 },
  { path: '/product/auto-update', priority: 0.75 },
  { path: '/product/txadmin-button', priority: 0.75 },
  { path: '/product/minecraft-mods-installer', priority: 0.75 },
  { path: '/product/txadmin-auto-setup', priority: 0.75 },
  { path: '/product/artifacts-changer', priority: 0.75 },
  { path: '/product/fivem-gamebuild-changer', priority: 0.75 },
  { path: '/product/fivem-resources-manager', priority: 0.75 },
  { path: '/product/minecraft-server-icon-changer', priority: 0.75 },
  { path: '/product/server-banip-firewall', priority: 0.75 },
  { path: '/product/server-importer-lite', priority: 0.75 },
  { path: '/product/minecraft-versions-changer', priority: 0.75 },
  { path: '/product/minecraft-bedrock-version-changer', priority: 0.75 },
  { path: '/product/minecraft-versions-changer-bundle', priority: 0.75 },
  { path: '/product/fivem-addons-bundle', priority: 0.75 },
  { path: '/product/minecraft-plugins-installer', priority: 0.75 },
  { path: '/product/minecraft-modpacks-installer', priority: 0.75 },
  { path: '/product/egg-name-before-server-name', priority: 0.75 },
  { path: '/product/server-limiter', priority: 0.75 },
  { path: '/product/minecraft-addons-pack', priority: 0.75 },
  { path: '/product/fivem-mysql-connexion-string-injector', priority: 0.75 },
  { path: '/product/pacman-during-installation-suspension', priority: 0.75 },
  { path: '/product/server-splitter', priority: 0.75 },
  { path: '/product/minecraft-jar-checker', priority: 0.75 },
  { path: '/product/server-importer-pro', priority: 0.75 },
  { path: '/product/minecraft-template-downloader', priority: 0.75 },
  { path: '/product/cloud-servers', priority: 0.75 },
  { path: '/product/user-avatar-changer', priority: 0.75 },
  { path: '/product/console-message-editor', priority: 0.75 },
  { path: '/product/fivem-cache-remover', priority: 0.75 },
];

const isProduction = process.env.environement === 'production';

module.exports = {
  devtool: 'source-map',
  mode: process.env.environement,
  watchOptions: {
    ignored: /node_modules/,
  },
  performance: {
    maxAssetSize: 25000,
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
    isProduction && new WebpackManifestPlugin(),
    isProduction && new ImageminWebpWebpackPlugin(),

    new Dotenv(),
    isProduction && new CompressionPlugin({
      exclude: /sitemap\.xml$/
    }),
    isProduction && new LodashModuleReplacementPlugin(),
    isProduction && new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`,  { nodir: true }),
    }),
    isProduction && new LoadablePlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: !isProduction,
    }),
    new SitemapWebpackPlugin({
      base: url,
      paths: urls,
      options: {
        filename: 'sitemap.xml',
        lastmod: true
      },

    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),

  ].filter(Boolean),
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./public/assets")
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
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
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    "alias": {
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime"
    },
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