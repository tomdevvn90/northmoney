/**
 * Webpack config
 */

const path = require( 'path' )
const webpack = require( 'webpack' )
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.argv.some( arg => arg.includes( 'serve' ) )

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve( __dirname, 'public' ),
    filename: 'js/[name].bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'css/[name].css',
    } ),
    new webpack.ProvidePlugin( {
      $: "jquery",
      jQuery: "jquery"
    } )
  ],
  devServer: {
    open: true,
    contentBase: path.join( __dirname ),
    compress: true,
    port: 9000,
  },
}
