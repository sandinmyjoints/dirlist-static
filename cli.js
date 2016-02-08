#!/usr/bin/env node

var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

var dirlist = require('./lib/index');

var indexFile = 'index.html';

process.stdout.write('<html><body>\n');

process.stdout.write(dirlist(argv));

process.stdout.write('\n</body></html>\n');
