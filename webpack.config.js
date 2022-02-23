const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry:{
        app : "./src/js/app.js"
    },
    output:{
        path: path.resolve('./dist/js'),
        filename:'[name].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader', 'css-loader']
                use:[
                    MiniCssExtractPlugin,
                    {
                        loader: "css-loader",
                        options : {}
                    }
                ],

            },
            {
                test:/\.png$/,
                use:[{
                    loader: 'file-loader',
                    options:{
                        name:'[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns:['dist']
        }),
        new MiniCssExtractPlugin(),
    ],
    resolve:{
        modules:['node-modules'],
        extensions: ['.js', '.json', '.jsx', '.css']

    }
}
