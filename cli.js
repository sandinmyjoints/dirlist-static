#!/usr/bin/env node

var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

var dirlist = require('./lib/index');

var indexFile = 'index.html';

fs.writeFileSync(indexFile, '<html><body>')

fs.appendFileSync(indexFile, dirlist(argv));

fs.appendFileSync(indexFile, '\n</body></html>\n')
