var fs = require('fs');
var path = require('path');
var walk = require('walkdir');
var defaults = require('lodash.defaults')

function main (opts) {
  opts = defaults(opts, {
    dir: '.',
    filter: null,
  });

  var buf = [];

  if (!opts.filter) {
    opts.filter = /./;
  } else {
    opts.filter = new RegExp(opts.filter);
  }

  function write (data) {
    buf.push(data);
  }

  var paths = walk.sync(opts.dir);
  paths.forEach(function (path) {
    if (opts.filter.test(path)) {
      write(linkify(path, opts.dir))
    }
  });
  return buf.join('');
}

function linkify (filepath, rootDir) {
  filepath = path.relative(rootDir, filepath);
  linkpath = filepath.split('/').map(function (part) {
    return encodeURIComponent(part);
  }).join('/')
  return '\n<li><a href="./' + linkpath + '">' + filepath + '</a></li>';
}

module.exports = main;
