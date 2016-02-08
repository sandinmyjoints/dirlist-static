var fs = require('fs');
var path = require('path');
var walk = require('walkdir');
var defaults = require('lodash.defaults')

var callingDir = process.cwd();

var buf = [];

function main (opts) {
  opts = defaults(opts, {
    dir: '.',
    filter: null,
  });

  if (!opts.filter) {
    opts.filter = /./;
  } else {
    opts.filter = new RegExp(opts.filter);
  }

  var paths = walk.sync(opts.dir);
  paths.forEach(function (path) {
    if (opts.filter.test(path)) {
      write(linkify(path))
    }
  });
  return buf.join('');
}

function write (data) {
  buf.push(data);
}

function linkify (filepath) {
  filepath = path.relative(callingDir, filepath);
  linkpath = filepath.split('/').map(function (part) {
    return encodeURIComponent(part);
  }).join('/')
  return '\n<li><a href="./' + linkpath + '">' + filepath + '</a></li>';
}

module.exports = main;
