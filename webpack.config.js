// entry point -> output

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProdudtion = env == 'production';
  const CSSExtract = new ExtractTextPlugin('style.css');

  console.log('env', env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'boundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
            //'style-loader',
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProdudtion ? 'source-map' : 'inline-source-map', //'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
};
