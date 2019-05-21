/*const path = require('path')
const glob = require('glob')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;

module.exports = {
  webpack: (config, { dev }) => {
    //if (ANALYZE) {
      config.module.rules.push(
        {
          test: /\.(css|scss)/,
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]'
          }
        },
        {
          test: /\.css$/,
          use: ['babel-loader', 'raw-loader', 'postcss-loader']
        },
        {
          test: /\.s(a|c)ss$/,
          use: ['babel-loader', 'raw-loader', 'postcss-loader',
            { loader: 'sass-loader',
              options: {
                outputStyle: 'compressed', // These options are from node-sass: https://github.com/sass/node-sass
                includePaths: ['styles', 'node_modules']
                  .map((d) => path.join(__dirname, d))
                  .map((g) => glob.sync(g))
                  .reduce((a, c) => a.concat(c), [])
              }
            }
          ]
        },
        { 
          test: /\.scss$/i, 
          exclude: /node_modules/, 
          use: isDevBuild ? ['style-loader', 'css-loader', 'sass-loader'] : 
          ExtractTextPlugin.extract({ use: ['css-loader', 'sass-loader'] }) 
        },
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    //}

    // For the development version, we'll use React.
    // Because, it supports react hot loading and so on.
    if (dev) {
      return config;
    }

    return config;
  }
};
*/
const path = require('path');
const glob = require('glob');


module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed', // These options are from node-sass: https://github.com/sass/node-sass
              includePaths: ['styles', 'node_modules']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );
    return config;
  }
  // exportPathMap: function(defaultPathMap) {
  //   return {
  //     '/': { page: '/' },
  //     '/landing': { page: '/landing' },
  //     '/generic': { page: '/generic' },
  //     '/landing': { page: '/landing' }
  //   }
  // }
};
