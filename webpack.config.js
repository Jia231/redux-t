var path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:["./src/index.tsx"],
    output:{
        path:path.join(__dirname,"build/dist"),
        filename:"bundle.js",
    },
    devServer:{
        contentBase : path.join(__dirname,"build/dist"),
        compress: true,
        port: 9000,
        stats:"errors-only"
    },
    mode:"development",
    resolve:{
        extensions:[".tsx",".ts",".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Custom template',
          minify:{
            collapseWhitespace:true
          },
          //hash:true,
          template: 'public/index.html'
        })
    ],
    module: {
        rules: [
          {
            test: /\.tsx$/,
            loader: "ts-loader",
            exclude: ['/node_modules/']
          },
          {
              test:/\.ts$/,
              loader: "ts-loader",
              exclude: ['src/registerServiceWorker.ts']
          },
          {
              test:/\.scss$/,
              use:["style-loader","css-loader","sass-loader"]
          },
          {
            test: /\.svg$/,
            use: [
                {
                  loader: 'svg-inline-loader',
                  options: {
                    noquotes: true,
                  },
                },
              ],
        }
        ]
    }
}
