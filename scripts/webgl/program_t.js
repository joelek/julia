var scaffold = require('<scaffold>');
var attributes = require('./attributes/attributes.js');
var shaders = require('./shaders/shaders.js');
var uniforms = require('./uniforms/uniforms.js');

var program_t = function program_t(context, fs, vs)
{
	var message;

	scaffold.check(arguments.length === 3);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.type(fs, shaders.fragment_t);
	scaffold.check.type(vs, shaders.vertex_t);

	this.context = context;
	this.program = context.createProgram();

	fs.attach(this.program);
	vs.attach(this.program);

	context.linkProgram(this.program);

	if (!context.getProgramParameter(this.program, context.LINK_STATUS))
	{
		message = context.getProgramInfoLog(this.program);

		context.deleteProgram(this.program);

		throw new global.Error(message);
	}

	this.attributes = attributes.factory(context, this.program);
	this.uniforms = uniforms.factory(context, this.program);
};

scaffold.types.define(program_t);

program_t.prototype.delete = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.program !== null);

	this.context.deleteProgram(this.program);

	this.program = null;
};

program_t.prototype.use = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.program !== null);

	this.context.useProgram(this.program);
};

module.exports = program_t;
