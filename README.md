[![Build Status](https://travis-ci.com/bitpay/bitpay-website.svg?token=gx4KpwugyoXSLZ3soZpN&branch=master)](https://travis-ci.com/bitpay/bitpay-website)

# Developing

```sh
$ npm install -g gulp
$ npm install
$ gulp serve
```

## Build

```sh
$ gulp
```

Build and optimize the site, ready for deployment. This includes linting as well as image, script, stylesheet and HTML optimization and minification.

## Serve Production Build

```sh
$ gulp serve:dist
```

Serve the optimized and minified version of the site for local testing.

## Deploy to gh-pages

```sh
$ gulp deploy
```

This builds for production, then deploys the dist folder to gh-pages.
