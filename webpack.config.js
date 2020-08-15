module.exports = {
    entry: "./scripts/app.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    watch: false,
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000
    }
};