# README

**This package need to be installed globaly!**

```shell
npm i @gudhub/ssg-website-blog-cli -g
```

After installation, go to directory, you want to create template for website, and run:

```shell
create-gudhub-blog-website
```

Then, choose options in the terminal. 
After project creation and node modules installing, go to folder and run:

```shell
npm run dev
```

This will start bundler (webpack) in development mode.
If you don't have gudhub web server configured yet, and want to see the result of your work, you need to start [@gudhub/webserver](https://www.npmjs.com/package/@gudhub/webserver) in local development mode [see @gudhub/webserver readme](https://www.npmjs.com/package/@gudhub/webserver)

For production build of your website use:

```shell
npm run build
```