'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (filename, options, callback) {
  var filePath = path.resolve(filename);

  if (typeof options === 'function') {
    callback = options;
    options = {};
  } else {
    options = options || {};
  }

  fs.readFile(filePath, function (error, contents) {
    if (error) {
      return callback(error);
    }

    var contentsArray = fileToArray(contents, options);

    callback(null, contentsArray);
  });
};

function fileToArray(contents, options) {
  var seperator = /\r?\n/;
  var results = [];
  var currentLine = 0;
  var lines;
  var lineCount;

  contents = String(contents);

  if (haz(options, 'seperator')) {
    seperator = options.seperator;
  }

  lines = contents.split(seperator);
  lineCount = lines.length;

  for (currentLine; currentLine < lineCount; currentLine++) {
    var line = lines[currentLine].trim();

    if (haz(options, 'emptyLines') && options.emptyLines === false) {
      if (line.length === 0) {
        continue;
      }
    }

    if (haz(options, 'trimLines') && options.trimLines === false) {
      line += lines[currentLine];
    }

    if (haz(options, 'withSeperator') && options.withSeperator === true) {
      line += seperator;
    }

    results.push(line);
  }

  return results;
}

function haz(obj, key) {
  function _haz() {
    var keys = key.split('.');
    while (!!keys.length) {
      var _key = keys.shift();
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[_key];
    }
    return true;
  }

  return (obj !== null && _haz());
}
