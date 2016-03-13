function s (value) {
  if (!(this instanceof s))
    return new s(value);
  this._wrapped = value;
}

s.Functions = require('./Functions');
s.Chat = require('./Chat');
s.FS = require('./FS');

s.prototype = {
  value: function value () {
    return this._wrapped;
  }
};

module.exports = s;
