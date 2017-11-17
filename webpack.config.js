var path = require("path");
var webpack = require("webpack");

module.exports = {
 entry: [
  //'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
   './src/index' // Your appʼs entry point
 ],
 output: {
   path: path.resolve(__dirname, './dist/assets/js/bundle/'),
   publicPath: '/dist/assets/js/bundle',
   filename: "bundle.js"
 },
 resolve: {
   extensions: ['*', '.js', '.jsx']
 },
 plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NoEmitOnErrorsPlugin(),
 ],

 module: {
   loaders: [
     {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       loaders: ['react-hot-loader','babel-loader'],
     },
     {
        test: /\.scss$/,
        loaders: ['style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader']
                    //?includePaths[]=' + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
           {
             loader: 'file-loader',
             options: {
               query: {
                 name:'assets/[name].[ext]'
               }
             }
           },
           {
             loader: 'image-webpack-loader',
             options: {
               query: {
                 mozjpeg: {
                   progressive: true,
                 },
                 gifsicle: {
                   interlaced: true,
                 },
                 optipng: {
                   optimizationLevel: 7,
                 }
               }
             }
         }]
     }
    ]
 }
};
