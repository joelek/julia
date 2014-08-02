var scaffold = require('<scaffold>');
var matrix_t = require('./matrix_t.js');

var identity_t = function identity_t()
{
	scaffold.check(arguments.length === 0);

	matrix_t.call(this, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
};

scaffold.types.extend(identity_t, matrix_t);

module.exports = identity_t;
