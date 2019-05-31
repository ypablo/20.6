const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

/*
module.exports = (env) => {
    return {
        mode: env || "production",
        entry: './src/index.js',
        optimization: {
            minimize: false
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        }
    }
};
*/

module.exports = (env) => {
    return {
        mode: env.NODE_ENV,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
        plugins: [new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body'
        }), new OptimizeJsPlugin({
            sourceMap: false
        })],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        }
    }
};    