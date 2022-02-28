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
            { // js babel .config
                test:/\.js$/,
                use: {
                    loader:'babel-loader',
                    options:{
                        sourceMap: true,
                        presets:[
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage',
                                    shippedProposals: true,
                                    // modules: false,
                                    corejs: 3
                                }
                            ],
                        ]
                    }
                },
                exclude: /node_modules/,
            },
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
        }),
    ],
    resolve:{
        // modules:['node-modules'],
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
        fallback:{
            "events" : false,
        }

    },
    devtool: 'inline-source-map',

}
