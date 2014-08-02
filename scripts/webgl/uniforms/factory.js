var scaffold = require('<scaffold>');
var bool_t = require('./bool_t.js');
var float_t = require('./float_t.js');
var float_mat3_t = require('./float_mat3_t.js');
var float_vec3_t = require('./float_vec3_t.js');
var sampler_2d_t = require('./sampler_2d_t.js');

var factory = function (context, program)
{
	var i;
	var info;
	var limit;
	var property;
	var uniform;
	var wrapper;

	scaffold.check(arguments.length === 2);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.type(program, global.WebGLProgram);

	limit = context.getProgramParameter(program, context.ACTIVE_UNIFORMS);
	wrapper = {};

	for (i = 0; i < limit; i++)
	{
		info = context.getActiveUniform(program, i);
		uniform = select(context, program, info);

		property = {};

		property.get = uniform.get.bind(uniform);
		property.set = uniform.set.bind(uniform);

		global.Object.defineProperty(wrapper, info.name, property);
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

	locator = context.getUniformLocation(program, info.name);

	switch (info.type)
	{
		case context.BOOL:
		{
			return new bool_t(context, info, locator);
		}
		case context.FLOAT:
		{
			return new float_t(context, info, locator);
		}
		case context.FLOAT_MAT3:
		{
			return new float_mat3_t(context, info, locator);
		}
		case context.FLOAT_VEC3:
		{
			return new float_vec3_t(context, info, locator);
		}
		case context.SAMPLER_2D:
		{
			return new sampler_2d_t(context, info, locator);
		}
		case context.BOOL_VEC2:
		case context.BOOL_VEC3:
		case context.BOOL_VEC4:
		case context.FLOAT_MAT2:
		case context.FLOAT_MAT4:
		case context.FLOAT_VEC2:
		case context.FLOAT_VEC4:
		case context.INT:
		case context.INT_VEC2:
		case context.INT_VEC3:
		case context.INT_VEC4:
		case context.SAMPLER_CUBE:
		default:
		{
			throw new global.Error('Unimplemented!');
		}
	}
};

module.exports = factory;
