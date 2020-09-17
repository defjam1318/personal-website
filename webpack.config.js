const webpack = require('webpack');
module.exports = {
    mode: 'production',
    entry: "./scripts/app.js",
    output: {
        path: __dirname + '/dst',
        filename: 'bundle.js'
    },
    watch: false,
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.txt$/i,
                use: 'raw-loader',
              }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};