var util = require('util');
var fs = require('fs');
var path = require('path');


exports.isCommand = function(input) {
	if(input.toLowerCase().substr(0, prefix.length) === prefix)
		return true;
	else
		return false;
}

exports.isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

exports.isURL = function(str) {
	var pattern = new RedExp(
		"^" +
		"(?:(?:https?|ftp)://)" +
		"(?:\\S+(?::\\S*)?@)?" +
		"(?:" +
		"(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
		"(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
		"(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
		"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
		"(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
		"(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
		"|" +
		"(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
		"(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
		"(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
		"\\.?" +
		")" +
		"(?::\\d{2,5})?" +
		"(?:[/?#]\\S*)?" +
		"$", "i"
	);

	if(!pattern.test(str))
		return false;
	else
		return true;
};

exports.getCommand = function(input) {
	return input.replace(prefix, '').split(' ')[0];
}

exports.getFolders = function (SourcePath) {
  return fs.readdirSync(SourcePath).filter(function(file) {
    return fs.statSync(path.join(SourcePath, file)).isDirectory();
  });
}

exports.getMessage = function(input) {
	return input.replace(prefix, '');
}

exports.getParams = function(text) {
	return text.split(' ').slice(1);
};

exports.normalizeChannel = function(channel) {
	
};

exports.numParams = function(text) {
	return text.split(' ').length-1;
};

exports.splitInput = function(splitAt, message, intSplit) {
	var data = message.split(splitAt)[1];
	return data.slice(0, data.length - intSplit);
}
