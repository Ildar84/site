const path = require('path');
const webpack = require('webpack');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyWebPackPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

let conf = {
  watch: true,
  mode: "development",
  context: path.resolve(__dirname, 'src'),
  entry: {
    // vendor: './script/vendor.js',
    common: './script/common.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'site/public/'),
    publicPath: '../'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: 'babel-loader',
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: MiniCssExtract.loader,
            options: {
            }
          },
          'css-loader',
          {loader: 'postcss-loader', options: {plugins: [require('autoprefixer')],}},
          'sass-loader',
        ],
        include: path.resolve(__dirname, 'src/sass'),
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtract.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(woff|ttf|eot|woff2|svg)$/,
        use: [
          { loader: 'url-loader',
            options: {
              limit: 2000,
              name: 'fonts/[name].[ext]'
            }
          }
        ],
      },

      {
        test: /\.(png|jpeg|jpg)$/,
        use: [
          { loader: 'url-loader',
            options: {
              limit: 18192,
              name: 'img/[name].[ext]'}
          }
          // limit => file.size =< 8192 bytes ? DataURI : File
        ]
      }

    ] // rules
  }, // end of module
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    }
  },
  // devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtract({
      filename: 'css/style.css',
      chunkFilename: '[id].css'
    }),
    new webpack.ProvidePlugin({
      identifier: '$',
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CopyWebPackPlugin([{
      from: 'views',
      to: '../views'
    }]),
    new MinifyPlugin({

    }, {
      test: /\.js/,
    })
  ]
//end
}

module.exports = conf;
