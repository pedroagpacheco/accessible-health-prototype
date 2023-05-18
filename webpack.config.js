const prod = process.env.NODE_ENV === 'production'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  resolve: {
    alias: {
      root: path.resolve(__dirname, './'),
      src: path.resolve(__dirname, 'src'),
      common: path.resolve(__dirname, 'src/common'),
      app: path.resolve(__dirname, 'src/app')/*,
      config: resolve('./src/config'),
      core: resolve('./src/core'),
      packages: resolve('./src/packages'),
      public: resolve('./public') */
    },
    symlinks: false,
    unsafeCache: true,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
    ]
  },
  devtool: prod ? undefined : 'source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: "./build",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    })
  ],
}
