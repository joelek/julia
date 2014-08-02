var scaffold = require('<scaffold>');
var attribute_t = require('./attribute_t.js');

var factory = function (context, program)
{
	var attribute;
	var i;
	var info;
	var limit;
	var wrapper;

	scaffold.check(arguments.length === 2);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.type(program, global.WebGLProgram);

	limit = context.getProgramParameter(program, context.ACTIVE_ATTRIBUTES);
	wrapper = {};

	for (i = 0; i < limit; i++)
	{
		info = context.getActiveAttrib(program, i);
		attribute = select(context, program, info);

		// TODO: Define property on wrapper?

		wrapper[info.name] = attribute;
	}

	return wrapper;
};

var select = function (context, program, info)
{
	var locator;

	scaffold.check(arguments.length === 3);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.type(program, global.WebGLProgram);
	scaffold.check.type(info, global.WebGLActiveInfo);

	locator = context.getAttribLocation(program, info.name);

	switch (info.type)
	{
		default:
		{
			return new attribute_t(context, info, locator);
		}
	}
};

module.exports = factory;
