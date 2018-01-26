const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['babel-polyfill'],
        main: path.resolve(__dirname, './src/router.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env'],
                        plugins: [
                            ["import", {
                                "libraryName": "antd",
                                "style": true
                            }],
                            "react-html-attrs"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                }))
            },
            {
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, './src'),
                    path.resolve(__dirname, './node_modules/'),//解决webpack 配置 antd 样式出错
                ],
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                }))
            },
            {
                test: /\.(png|jpg[e]?|gif|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        /**
                         * 小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy
                         */
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'react news',
            template: './index.html', // 源模板文件
            filename: './index.html'// 输出文件【注意：这里的根路径是module.exports.output.path】
        }),
        new webpack.ProvidePlugin({
            "React": "react",
            "ReactDOM": "react-dom",
        }),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        publicPath: '/',
        host: 'localhost',
        port: 3006,
        historyApiFallback: true,
        open: true,
        hot: true,
        stats: {
            colors: true
        }

    }
}