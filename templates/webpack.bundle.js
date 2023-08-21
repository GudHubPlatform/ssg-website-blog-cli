import glob from 'glob';
import path from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    /* BUNDLING WEBCOMPONENTS */
    entry: () => {
        return glob.sync('./src/assets/js/components/**/*.js');
    },
    output: {
        path: path.resolve('dist/assets/js'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false
                }
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}