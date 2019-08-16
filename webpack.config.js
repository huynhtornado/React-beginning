const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },

   // Enable sourcemaps for debugging webpack's output.
   devtool: "source-map",

   resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
   },

   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.scss$/,
            use: [
               "style-loader",
               "css-loader",
               "sass-loader",
               {
                  loader: "@epegzz/sass-vars-loader", // read Sass vars from file or options
                  options: {
                     files: [path.resolve(__dirname, "src/styles/colors.js")],
                  },
               },
            ],
         },
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: '../public/index.html'
      })
   ]
}