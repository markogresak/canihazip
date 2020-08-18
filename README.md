# [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

### :warning: Deprecation notice

The [canihazip.com](http://canihazip.com/) project stopped working. See the report at #2. As a fallback, this project is using [ipify.org](https://www.ipify.org/) with [patch 1.0.3](https://github.com/markogresak/canihazip/releases/tag/v1.0.3) so it does not break old usages.

**For new projects, I suggest using [`public-ip`](https://www.npmjs.com/package/public-ip)**. It is better maintained, built to be more robust (to avoid issues like #2) and has a better feature set.

---

> Get public IP using ~~[canihazip.com](http://canihazip.com/)~~ [ipify.org](https://www.ipify.org/).

## Install

### To use it as a node module:

```sh
npm install --save canihazip
```

#### Or to use it as CLI:

```sh
npm install --global canihazip
```

## Usage

### As a node module:

```js
var canihazip = require('canihazip');

var ip = canihazip();
```

#### As CLI:

```sh
canihazip
```

This will return IP of the current machine, for example: `1.2.3.4`.

## License

MIT © [Marko Grešak](https://gresak.io)

[npm-image]: https://badge.fury.io/js/canihazip.svg
[npm-url]: https://npmjs.org/package/canihazip
[travis-image]: https://travis-ci.org/markogresak/canihazip.svg?branch=master
[travis-url]: https://travis-ci.org/markogresak/canihazip
[daviddm-image]: https://david-dm.org/markogresak/canihazip.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/markogresak/canihazip
