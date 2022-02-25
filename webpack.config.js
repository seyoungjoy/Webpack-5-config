const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    context:path.resolve(__dirname, './site/assets_src'),
    entry:{
        app : "./js/app.js"
    },
    output:{
        path: path.resolve(__dirname,'./site/assets/'),
        filename:'js/[name].bundle.js',
        sourceMapFilename: "[name].map",
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            "@babel/env",{
                                "useBuiltIns" : "entry",
                                "corejs": 3,
                                "targets" : {
                                    "browsers": ["last 3 versions", "ie >= 11"],
                                    "node": "current"
                                }
                            }
                        ]],
                        plugins: []
                    }
                }
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns:['dist']
        }),
        new CopyPlugin({
            patterns:[
                {from:"./css/**"},
                {from:"./img/**/*"},
            ]
        })
    ],
    resolve:{
        modules:['node-modules'],
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
        fallback:{
            "events" : false,
        }

    },
    // devServer: {
    //     static: {
    //         directory: path.resolve(__dirname, './site/'),
    //     },
    //     compress: true,
    //     hot : true,
    //     port: 9000,
    // },
}
