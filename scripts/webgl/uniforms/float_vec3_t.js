var scaffold = require('<scaffold>');
var uniform_t = require('./uniform_t.js');

var float_vec3_t = function float_vec3_t(context, info, locator)
{
	scaffold.check(arguments.length === 3);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.type(info, global.WebGLActiveInfo);
	scaffold.check.type(locator, global.WebGLUniformLocation);

	uniform_t.call(this, context, info, locator);
};

scaffold.types.extend(float_vec3_t, uniform_t);

float_vec3_t.prototype.set = function (value)
{
	scaffold.check(arguments.length === 1);
	scaffold.check.number.array(value);

	if (value.length !== this.info.size*3)
	{
		throw new global.Error('The uniform "' + this.info.name + '" needs ' + this.info.size*3 + ' elements but ' + value.length + ' were supplied!');
	}

	this.context.uniform3fv(this.locator, false, value);

	this.current = value;
}

module.exports = float_vec3_t;
