const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
                use:['style-loader', 'css-loader']
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
        new CopyPlugin({
            patterns:[
                {from:'./src/css/**/*', to:'./dist/css/'},
                {from:'./src/img/**/*', to:'./dist/img'}
            ]
        })
    ],
    resolve:{
        modules:['node-modules'],
        extensions: ['.js', '.json', '.jsx', '.css']

    }
}
