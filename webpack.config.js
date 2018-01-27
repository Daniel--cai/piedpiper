const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader?modules&localIdentName=[local]_[hash:base64:5]', 'sass-loader']
            
      },
      {
        test: /\.(png|jpg)$/,
        use: 'file-loader',
        include: resolve(__dirname, 'src')
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader',
        include: resolve(__dirname, 'src/assets/font')
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        title: "Piped Piper",
        template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), 
    new webpack.NoEmitOnErrorsPlugin(),

  ],

  resolve: {
    alias: {
      'images': resolve(__dirname, 'src/assets'),
      'components': resolve(__dirname, 'src/components'),
      'containers': resolve(__dirname, 'src/containers'),
      'actions': resolve(__dirname, 'src/actions'),
      'reducers': resolve(__dirname, 'src/reducers'),
      'site': resolve(__dirname, 'src/components/site'),
      'css': resolve(__dirname, 'src/css/global'),
    }
  }
};