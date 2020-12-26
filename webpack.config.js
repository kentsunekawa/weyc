const path = require('path');
// const MODE = 'production';
const MODE = 'development';

module.exports = {
  mode: MODE,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'script.js',
  },
  // watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    open: true,
    publicPath: '/js/'
  }
}