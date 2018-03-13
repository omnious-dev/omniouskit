// Global import
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HappyPack = require('happypack');
const { resolve } = require('path');
const { smart } = require('webpack-merge');

// Local import
const commonConfig = require('./webpack.config.common');
const { srcDir } = require('./config/paths');

function mainLoader(language) {
  switch (language) {
    case 'ts':
      return {
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: {
                loader: 'happypack/loader',
                options: {
                  id: 'happypack-typescript'
                }
              },
              include: srcDir
            }
          ]
        },
        plugins: [
          new ForkTsCheckerWebpackPlugin({
            checkSyntacticErrors: true
          }),
          new HappyPack({
            id: 'happypack-typescript',
            verbose: false,
            threads: 5,
            loaders: [
              {
                loader: 'ts-loader',
                options: {
                  happyPackMode: true
                }
              }
            ]
          })
        ]
      };
    case 'js':
    default:
      return {
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              use: {
                loader: 'happypack/loader',
                options: {
                  id: 'happypack-javascript'
                }
              },
              include: srcDir
            }
          ]
        },
        plugins: [
          new HappyPack({
            id: 'happypack-javascript',
            verbose: false,
            threads: 5,
            loaders: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true
                }
              }
            ]
          })
        ]
      };
  }
}

module.exports = (env, options) => {
  const { language = 'js', add } = options;

  let additionalConfig = {};
  if (add) additionalConfig = require(resolve(process.cwd(), add));

  switch (env) {
    case 'development': {
      const devConfig = require('./webpack.config.dev');
      return smart(commonConfig, devConfig, mainLoader(language), additionalConfig);
    }
    case 'production': {
      const prodConfig = require('./webpack.config.prod');
      return smart(commonConfig, prodConfig, mainLoader(language), additionalConfig);
    }
    case 'test':
    default:
      // TODO: config for test
      return {};
  }
};
