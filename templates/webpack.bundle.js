import glob from 'glob';
import path from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { components_list as GudhubComponents } from '@gudhub/ssg-web-components-library';

export default {
    /* BUNDLING WEBCOMPONENTS */
    entry: () => {
        const entries = glob.sync('./src/assets/js/components/**/*.js');

        // adds "node_modules/@gudhub/ssg-web-components-library" entries
        const gudhubEntries = (() => {
            const entries = [];
            for (const componentConfig of GudhubComponents) {
                entries.push('./node_modules/' + componentConfig.src);
            }
            return entries;
        })()

        return [
            ...entries,
            ...gudhubEntries
        ];
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