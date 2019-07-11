const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (isDev) => (
  [
    new ExtractTextPlugin({
      filename: 'app.bundle.css',
      disable: process.env.NODE_ENV === 'development'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
      'process.env.REACT_APP_BASE_URL': JSON.stringify(process.env.REACT_APP_BASE_URL),
      'process.env.REACT_APP_IDENTITY_URL': JSON.stringify(process.env.REACT_APP_IDENTITY_URL)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module =>
        module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    ...(isDev
      ? [
        new webpack.HotModuleReplacementPlugin({
          // multiStep: true, // better performance with many files
        }),
        // new DashboardPlugin(),
        new webpack.NamedModulesPlugin()
      ]
      : []),
    ...(!isDev
      ? [
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
         beautify: false,
         compress: {
           screw_ie8: true
         },
         comments: false,
         sourceMap: true
        })
      ]
      : []),
    new FaviconsWebpackPlugin({
      logo: './src/images/favicon.png',
      title: 'Approve Engine',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    // new BundleAnalyzerPlugin()
  ]
);
