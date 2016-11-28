var Webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!bootstrap/dist/js/bootstrap.min.js',
    './app/app.jsx'
  ],
  externals : {
    jquery : 'jQuery'
  },
  plugins : [
    new Webpack.ProvidePlugin({
        '$' : 'jquery',
        'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      home : 'app/components/home/home.jsx',
      topNav : 'app/components/home/nav.jsx',
      homeContent : 'app/components/home/homeContent.jsx',
      about : 'app/components/about/about.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }

    ]
  }
};
