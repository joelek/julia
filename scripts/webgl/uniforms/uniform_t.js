var scaffold = require('<scaffold>');

var uniform_t = function uniform_t(context, info, locator)
{
	scaffold.check(arguments.length === 3);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.type(info, global.WebGLActiveInfo);
	scaffold.check.type(locator, global.WebGLUniformLocation);

	this.context = context;
	this.current = null;
	this.info = info;
	this.locator = locator;
};

scaffold.types.define(uniform_t);

uniform_t.prototype.get = function ()
{
	scaffold.check(arguments.length === 0);

	return this.current;
};

uniform_t.prototype.set = function (value)
{
	throw new global.Error('Abstract!');
};

module.exports = uniform_t;
