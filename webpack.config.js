const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode:'development',
    entry: {
        index: './src/index.js'
      },
      output: {
        // filename: '[name].[chunkhash].js',
        // path: __dirname + '/dist'
         filename: 'main.js',
         path: __dirname + '/dist'
      },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test:/\.(png|jpg)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    resolve: {
        alias: {
          '@styles': path.resolve(__dirname, 'src/styles/')
        }
      }
};