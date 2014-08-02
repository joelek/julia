var scaffold = require('<scaffold>');
var shader_t = require('./shader_t.js');

var fragment_t = function fragment_t(context, source)
{
	scaffold.check(arguments.length === 2);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.string(source);

	shader_t.call(this, context, source, context.FRAGMENT_SHADER);
};

scaffold.types.extend(fragment_t, shader_t);

module.exports = fragment_t;
