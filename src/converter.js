'use strict';

var ass = require('./ass');

exports.convert = function (_in, _out, _options)
{
	_options = _options || {};

	ass.parse(_in, _out, _options);
};
