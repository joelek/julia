var scaffold = require('<scaffold>');
var shader_t = require('./shader_t.js');

var vertex_t = function vertex_t(context, source)
{
	scaffold.check(arguments.length === 2);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.string(source);

	shader_t.call(this, context, source, context.VERTEX_SHADER);
};

scaffold.types.extend(vertex_t, shader_t);

module.exports = vertex_t;
