var util = require('util');
var fs = require('fs');
var path = require('path');
var os = require('os');
var rimraf = require('rimraf');

exports.removeDir = function (path, callback) {
  rimraf(path, callback);
};
