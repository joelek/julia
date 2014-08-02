var scaffold = require('<scaffold>');

var shader_t = function shader_t(context, source, type)
{
	var message;

	scaffold.check(arguments.length === 3);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.string(source);
	scaffold.check.number(type);

	this.context = context;
	this.shader = context.createShader(type);

	context.shaderSource(this.shader, source);
	context.compileShader(this.shader);

	if (!context.getShaderParameter(this.shader, context.COMPILE_STATUS))
	{
		message = context.getShaderInfoLog(this.shader);

		context.deleteShader(this.shader);

		throw new global.Error(message);
	}
};

scaffold.types.define(shader_t);

shader_t.prototype.attach = function (program)
{
	scaffold.check(arguments.length === 1);
	scaffold.check.type(program, global.WebGLProgram);
	scaffold.check(this.shader !== null);

	this.context.attachShader(program, this.shader);
};

shader_t.prototype.delete = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.shader !== null);

	this.context.deleteShader(this.shader);

	this.shader = null;
};

module.exports = shader_t;
