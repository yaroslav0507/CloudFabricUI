const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATHS = require('./PATHS');

module.exports = (env) => {
  const isDev = !env.build;
  const isSourceMap = !!env.sourceMap || isDev;
  const CSS_LOADER_SETTINGS = 'css-loader?sourceMap!sass-loader?sourceMap!import-glob-loader';

  return [
    {
      test: /\.tsx?$/,
      include: PATHS.src,
      use: env.awesome
        ? [
          {loader: 'react-hot-loader/webpack'},
          {
            loader: 'awesome-typescript-loader',
            options: {
              transpileOnly: true,
              useTranspileModule: false,
              sourceMap: isSourceMap
            }
          }
        ]
        : [
          {loader: 'react-hot-loader/webpack'},
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              compilerOptions: {
                sourceMap: isSourceMap,
                target: isDev ? 'es2015' : 'es5',
                isolatedModules: true,
                noEmitOnError: false
              }
            }
          }
        ]
    },
    {
      test: /\.json$/,
      include: [PATHS.src],
      use: {loader: 'json-loader'}
    },
    {
      test: /\.s?css$/,
      loader: !isDev
        ? ExtractTextPlugin.extract({fallback: 'style-loader', use: CSS_LOADER_SETTINGS})
        : ['style-loader', CSS_LOADER_SETTINGS]
    },
    {
      test: /\.(woff|woff2|eot|ttf|jpg)$/,
      loader: 'url-loader?limit=100000'
    },
    {
      test: /\.(png)$/,
      use: [{
        loader: 'file-loader',
        options: {}
      }]
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              removeStyleElement: false
            }
          }
        }
      ]
    }
  ]
};

