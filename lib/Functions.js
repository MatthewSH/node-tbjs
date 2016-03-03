var util = require('util');
var fs = require('fs');
var path = require('path');

exports.splitInput = function(splitAt, message, intSplit) {
	var data = message.split(splitAt)[1];
	return data.slice(0, data.length - intSplit);
}
exports.numParams = function(text) {
	return text.split(' ').length-1;
};

exports.getParams = function(text) {
	return text.split(' ').slice(1);
};

exports.isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

exports.isCommand = function(input) {
	if(input.toLowerCase().substr(0, prefix.length) === prefix)
		return true;
	else
		return false;
}

exports.getCommand = function(input) {
	return input.replace(prefix, '').split(' ')[0];
}

exports.getMessage = function(input) {
	return input.replace(prefix, '');
}

exports.getFolders = function (SourcePath) {
  return fs.readdirSync(SourcePath).filter(function(file) {
    return fs.statSync(path.join(SourcePath, file)).isDirectory();
  });
}
