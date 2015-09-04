# readfile-split [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Read a file into an array


## Install

```sh
$ npm install --save readfile-split
```

## Usage

```js
var readfileSplit = require('readfile-split');

// readfileSplit(filename[, options], callback)

// options with defaults
var options = {
  // fs.readFile specific options
  encoding: null,
  flag: 'r',

  // readfileSplit specific options
  emptyLines: true,
  trimLines: true,
  withSeperator: false,
  seperator: /\r?\n/
};

readfileSplit('/somewhere/somefile', options, console.log);
// > null [ 'Hello,', '', 'Don\'t worry.', 'Be happy.', '', 'Goodbye!', '' ]

options.emptyLines = false;
readfileSplit('/somewhere/somefile', options, console.log);
// > null [ 'Hello,', 'Don\'t worry.', 'Be happy.', 'Goodbye!' ]

options.seperator = '.';
readfileSplit('/somewhere/somefile', options, console.log);
// > null [ 'Hello,\n\nDon\'t worry', 'Be happy', 'Goodbye!' ]

options.withSeperator = true;
readfileSplit('/somewhere/somefile', options, console.log);
// > null [ 'Hello,\n\nDon\'t worry.', 'Be happy.', 'Goodbye!' ]

// etc.
```

## License

ISC © [Buster Collings](http://about.me/buster)


[npm-image]: https://badge.fury.io/js/readfile-split.svg
[npm-url]: https://npmjs.org/package/readfile-split
[travis-image]: https://travis-ci.org/busterc/readfile-split.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/readfile-split
[daviddm-image]: https://david-dm.org/busterc/readfile-split.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/busterc/readfile-split
