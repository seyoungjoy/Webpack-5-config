const path = require("path");
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = {
    mode: "production",
    devtool: 'cheap-module-source-map',
}
