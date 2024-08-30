import glob from 'glob';
import path from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import GenerateJsonFromJsPlugin from './GenerateJsonFromJsPlugin.js'

import { components_list as GudhubComponents } from '@gudhub/ssg-web-components-library';

export default {
    plugins: [
        new CopyWebpackPlugin({
            patterns: [

                /* COPYING ALL IMAGES */
                {
                    from: 'assets/images',
                    to: 'assets/images',
                    context: 'src/',
                    noErrorOnMissing: true
                },

                /* COPYING CSS FILES */
                {
                    from: 'assets/css/**/*.css',
                    to: '[path][name].css',
                    context: 'src/'
                },

                /* COPYING ALL HTML FILES */
                {
                    from: '**/*.html',
                    to: '[path][name].html',
                    context: 'src/',
                    filter: (resourcePath) => {
                        return !resourcePath.includes('/assets/');
                    },
                    transform: (content, resourcePath) => {
                        return new Promise(resolve => {
                            let string = content.toString();
                            let data = string.split('<body>');
                            let modified = data[0] + '<body><script data-server-only src="https://unpkg.com/@gudhub/core@1.2.0/umd/library.min.js"></script><script data-server-only src="https://unpkg.com/@gudhub/gh-component/dist/main.js"></script>' + data[1];

                            data = modified.split('<head>');
                            modified = data[0] + '<head><script id="base_write_script">document.write(`<base href="${window.MODE === \'production\' ? \'https\' : \'http\'}://${window.getConfig().website}">`);document.querySelector("#base_write_script").remove();</script>' + data[1];

                            data = modified.split('</body>');
                            modified = data[0] + '<script data-server-only src="/assets/js/bundle.js"></script></body>' + data[1];
                            resolve(Buffer.from(modified, 'utf-8'));

                        });
                    }
                },

                /* COPYING ROBOTS.TXT */
                {
                    from: 'robots.txt',
                    to: 'robots.txt',
                    context: 'src/'
                },

                /* COPYING FAVICON */
                {
                    from: 'favicon.ico',
                    to: 'favicon.ico',
                    context: 'src'
                }
            ],
            // options: {
            //     copyUnmodified: false
            // },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new GenerateJsonFromJsPlugin({
            path: 'config.mjs',
            filename: 'config.json',
            data: {
              description: 'Test generate json from js'
            }
        })
    ],
    /* BUNDLING WEBCOMPONENTS */
    entry: () => {
        const entries = glob.sync('./src/assets/js/**/*.js').reduce((obj, el) => {
            obj[el.replace('src/', '')] = el;
            return obj;
        }, {});

        // adds entries from @gudhub/ssg-web-components-library
        const gudhubEntries = (() => {
            const entries = [];
            for (const componentConfig of GudhubComponents) {
                entries.push('./node_modules/' + componentConfig.src);
            }

            return entries.reduce((obj, el) => {
                const path = el;
                const componentsIndex = path.indexOf('/components');
                obj[path.replace(path.substring(0, componentsIndex), '/assets/js/')] = el;
                return obj;
            }, {});
        })()


        return {
            ...entries,
            ...gudhubEntries
        };
    },
    output: {
        path: path.resolve('dist'),
        filename: "[name]"
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
                ],
            }
        ]
    }
}