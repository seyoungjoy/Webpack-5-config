const path = require("path");
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
}
