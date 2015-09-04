'use strict';

/* global describe, before, it */

var assert = require('assert');
var readfileSplit = require('../lib');
var textFile;

describe('readfile-split', function () {
  before(function () {
    textFile = __dirname + '/loremipsum';
  });

  it('should split a file into an array with defaults', function (done) {
    readfileSplit(textFile, function (error, results) {
      if (error) {
        done(error);
      }
      assert.equal(4, results.length);
      done();
    });
  });

  it('should split a file into an array with seperator: "."', function (done) {
    readfileSplit(textFile, {
      seperator: '.'
    }, function (error, results) {
      if (error) {
        done(error);
      }
      assert.equal(10, results.length);
      done();
    });
  });

  it('should split a file excluding empty lines', function (done) {
    readfileSplit(textFile, {
      emptyLines: false
    }, function (error, results) {
      if (error) {
        done(error);
      }
      assert.equal(2, results.length);
      done();
    });
  });

  it('should split a file without removing the seperator', function (done) {
    readfileSplit(textFile, {
      withSeperator: true,
      seperator: '.'
    }, function (error, results) {
      if (error) {
        done(error);
      }
      assert.equal(true, !!results.indexOf('.'));
      done();
    });
  });

  it('should split a file with trimmed lines', function (done) {
    readfileSplit(textFile, {
      trimLines: true,
      withSeperator: true,
      seperator: '.'
    }, function (error, results) {
      if (error) {
        done(error);
      }
      assert.equal(true, !!results[1].indexOf(' '));
      done();
    });
  });
});
