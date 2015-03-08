'use strict';

var converter = require('./src/converter');

converter.convert(process.argv[2], process.argv[3], {
	bleh: 'bloh'
});
