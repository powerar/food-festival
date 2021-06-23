<<<<<<< HEAD
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
=======
const webpack = require("webpack");
const path = require("path");
>>>>>>> f44e1306a035ac14abd6804654860c192f9b7726

module.exports = {
<<<<<<< HEAD
  entry: {
    app: './assets/js/script.js',
    events: './assets/js/events.js',
    schedule: './assets/js/schedule.js',
    tickets: './assets/js/tickets.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.jpg$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name(file) {
                return '[path][name].[ext]';
              },
              publicPath: function (url) {
                return url.replace('../', '/assets/');
              },
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  //add the jquery plugins
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
  mode: 'development',
};
=======
  entry: "./assets/js/script.js",
  output: {
    path: path.join(__dirname + "/dist"),
    filename: "main.bundle.js"
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  ],
  mode: "development"
};
>>>>>>> f44e1306a035ac14abd6804654860c192f9b7726
