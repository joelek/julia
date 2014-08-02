var scaffold = require('<scaffold>');

var buffer_t = function buffer_t(context)
{
	scaffold.check(arguments.length === 1);
	scaffold.check.type(context, global.WebGLRenderingContext);

	this.buffer = context.createBuffer();
	this.context = context;
};

scaffold.types.define(buffer_t);

buffer_t.prototype.delete = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.buffer !== null);

	this.context.deleteBuffer(this.buffer);

	this.buffer = null;
};

buffer_t.prototype.draw = function ()
{
	throw new global.Error('Abstract!');
};

buffer_t.prototype.transfer = function ()
{
	throw new global.Error('Abstract!');
};

module.exports = buffer_t;
