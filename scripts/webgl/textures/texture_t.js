var scaffold = require('<scaffold>');

var texture_t = function texture_t(context)
{
	scaffold.check(arguments.length === 1);
	scaffold.check.type(context, global.WebGLRenderingContext);

	this.context = context;
	this.texture = context.createTexture();

	this.context.bindTexture(this.context.TEXTURE_2D, this.texture);

    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_MAG_FILTER, this.context.LINEAR);
    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_MIN_FILTER, this.context.LINEAR);
    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_WRAP_S, this.context.CLAMP_TO_EDGE);
    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_WRAP_T, this.context.CLAMP_TO_EDGE);
};

scaffold.types.define(texture_t);

texture_t.prototype.bind = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.texture !== null);

	this.context.bindTexture(this.context.TEXTURE_2D, this.texture);
};

texture_t.prototype.delete = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.texture !== null);

	this.context.deleteTexture(this.texture);

	this.texture = null;
};

texture_t.prototype.transfer = function (data, w, h)
{
	scaffold.check(arguments.length === 3);
	scaffold.check.number.array(data);
	scaffold.check.number(w);
	scaffold.check.number(h);
	scaffold.check(this.texture !== null);

	if (data.length !== w*h*4)
	{
		throw new global.Error('The wrong number of pixels were supplied!');
	}

	this.context.bindTexture(this.context.TEXTURE_2D, this.texture);
	this.context.texImage2D(this.context.TEXTURE_2D, 0, this.context.RGBA, w, h, 0, this.context.RGBA, this.context.UNSIGNED_BYTE, new global.Uint8Array(data));
};

module.exports = texture_t;
