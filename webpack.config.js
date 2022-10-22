const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const json5 = require('json5');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  //webpack-dev-server settings
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
  },
  module: {
    rules: [
      /** CSS */
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        // npm i style-loader css-loader -D
      },
      /** SCSS/SAAS */
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
        // npm i style-loader css-loader sass sass-loader -D
      },
      {
        test: /\.bundle\.ts$/,
        use: {
          loader: 'bundle-loader',
          options: {
            name: '[name]'
          }
        }
      },
      {
        test: /\.tsx?$/,
        enforce: "pre",
        use: ['ts-loader',"source-map-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|gif|jpg)$/,
        exclude: /fonts/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
  /* Attempt to resolve these extensions in order.
     If multiple files share the same name but have
     different extensions, webpack will resolve the
     one with the extension listed first in the
     array and skip the rest.
   */
  resolve: {
    extensions: ['*','.js','.ts','.tsx',  'scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new NodePolyfillPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};