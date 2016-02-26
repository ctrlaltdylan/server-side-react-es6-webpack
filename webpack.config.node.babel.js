import path from 'path';
import webpack from 'webpack';
import nib from 'nib';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;
const getPath = (...args) => path.join(__dirname, ...args);
// Remove any falsy values from the input args or array. Return an array.
const getArray = (...args) => [].concat(...args).filter(Boolean);

export default {
  context: getPath('./'),
  entry: './src/server',
  target: 'node',
  output: {
    path: getPath('public'),
    filename: 'server.js',
    pathinfo: isDevelopment,
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
  },
  plugins: getArray([
    new webpack.optimize.OccurenceOrderPlugin(),
    isProduction && new webpack.optimize.DedupePlugin(),
    isProduction && new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true}),
    isDevelopment && new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  stylus: {
    use: [nib()],
    import: ['~nib/lib/nib/index.styl'],
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: getArray(isDevelopment && 'eslint-loader'),
        include: getPath('src'),
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: getArray(isDevelopment && 'react-hot', 'babel-loader'),
        include: getPath('src'),
      },
      {
        test: /\.styl$/,
        loaders: ['raw-loader', 'css-loader', 'stylus-loader'],
        include: getPath('src'),
      },
    ],
  },
};
