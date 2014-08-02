var scaffold = require('<scaffold>');
var shape_t = require('./shape_t.js');

var quad_t = function quad_t(context)
{
	var indices;
	var vectors;

	scaffold.check(arguments.length === 1);
	scaffold.check.type(context, global.WebGLRenderingContext);

	indices =
	[
		0, 1, 2,
		0, 2, 3
	];

	vectors =
	[
		 1.0,  1.0, 0.0,
		-1.0,  1.0, 0.0,
		-1.0, -1.0, 0.0,
		 1.0, -1.0, 0.0
	];

	shape_t.call(this, context, indices, vectors);
};

scaffold.types.extend(quad_t, shape_t);

module.exports = quad_t;
