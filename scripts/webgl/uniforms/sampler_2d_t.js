var scaffold = require('<scaffold>');
var uniform_t = require('./uniform_t.js');

var sampler_2d_t = function sampler_2d_t(context, info, locator)
{
	scaffold.check(arguments.length === 3);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.type(info, global.WebGLActiveInfo);
	scaffold.check.type(locator, global.WebGLUniformLocation);

	uniform_t.call(this, context, info, locator);
};

scaffold.types.extend(sampler_2d_t, uniform_t);

sampler_2d_t.prototype.set = function (value)
{
	scaffold.check(arguments.length === 1);

	if (this.info.size === 1)
	{
		scaffold.check.number(value);

		this.context.uniform1i(this.locator, value);

		this.current = value;
	}
	else
	{
		scaffold.check.number.array(value);

		if (value.length !== this.info.size)
		{
			throw new global.Error('The uniform "' + this.info.name + '" needs ' + this.info.size + ' elements but ' + value.length + ' were supplied!');
		}

		this.context.uniform1iv(this.locator, value);

		this.current = value;
	}
}

module.exports = sampler_2d_t;
