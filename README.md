#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Get public IP using [canihazip.com](http://canihazip.com/).


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
