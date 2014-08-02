var scaffold = require('<scaffold>');

var attribute_t = function attribute_t(context, info, locator)
{
	scaffold.check(arguments.length === 3);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.type(info, global.WebGLActiveInfo);
	scaffold.check.number(locator);

	this.context = context;
	this.info = info;
	this.locator = locator;
};

scaffold.types.define(attribute_t);

module.exports = attribute_t;
