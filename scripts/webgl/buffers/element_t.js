var scaffold = require('<scaffold>');
var buffer_t = require('./buffer_t.js');

var element_t = function element_t(context, data)
{
	scaffold.check(arguments.length === 2);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.number.array(data);

	buffer_t.call(this, context);

	this.data = new global.Uint16Array(data);
};

scaffold.types.extend(element_t, buffer_t);

element_t.prototype.bind = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.buffer !== null);

	this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER, this.buffer);
};

element_t.prototype.draw = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.buffer !== null);

	this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER, this.buffer);
	this.context.drawElements(this.context.TRIANGLES, this.data.length, this.context.UNSIGNED_SHORT, 0);
};

element_t.prototype.transfer = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.buffer !== null);

	this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER, this.buffer);
	this.context.bufferData(this.context.ELEMENT_ARRAY_BUFFER, this.data, this.context.STATIC_DRAW);
};

module.exports = element_t;
