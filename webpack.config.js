const prod = process.env.NODE_ENV === 'production'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: ['webpack/hot/dev-server', './src/index.tsx'],
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common')/* ,
      app: resolve('./src/app'),
      config: resolve('./src/config'),
      core: resolve('./src/core'),
      packages: resolve('./src/packages'),
      pages: resolve('./src/pages'),
      root: resolve('./'),
      public: resolve('./public') */
    },
    symlinks: false,
    unsafeCache: true,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  output: {
    path: __dirname + '/dist/',
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
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    })
  ],
}
