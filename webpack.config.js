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
        extensions: ['.js', '.json', '.jsx', '.css'],
        fallback:{
            "events" : false,
        }

    },
    // devServer: {
    //     host:"localhost",
    //     static:path.join(__dirname, "/site/assets/"),
    //     compress:true,
    //     hot:true,
    //     inline:true,
    //     port:9000,
    //     open:true,
    // },

}
