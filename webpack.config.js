const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  watch : false ,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  }
 ,
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    template : path.resolve(__dirname, 'template.html')
  })]
}

module.exports = ( env , args )=> {
  if (args.mode === 'development') {
    config.watch = true;
  }

  return config

};
