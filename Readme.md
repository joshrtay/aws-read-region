
# read-region

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Read the AWS region from environment variables or ~/.aws config.

## Installation

    $ npm install aws-read-region

## Usage

```js
const readRegion = require('aws-read-region')

readRegion().then(config => config) // => {region: "us-west-2"}

```

## API

### readRegion()

**Returns:** returns object with region set

## License

MIT

[travis-image]: https://img.shields.io/travis/joshrtay/aws-read-region.svg?style=flat-square
[travis-url]: https://travis-ci.org/joshrtay/aws-read-region
[git-image]: https://img.shields.io/github/tag/joshrtay/aws-read-region.svg?flat-square
[git-url]: https://github.com/joshrtay/aws-read-region
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/aws-read-region.svg?style=flat-square
[npm-url]: https://npmjs.org/package/aws-read-region
