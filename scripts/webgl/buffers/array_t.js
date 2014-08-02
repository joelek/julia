var scaffold = require('<scaffold>');
var attributes = require('../attributes/attributes.js');
var buffer_t = require('./buffer_t.js');

var array_t = function array_t(context, data)
{
	scaffold.check(arguments.length === 2);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.number.array(data);

	buffer_t.call(this, context);

	this.data = new global.Float32Array(data);
};

scaffold.types.extend(array_t, buffer_t);

array_t.prototype.bind = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.buffer !== null);

	this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer);
};

array_t.prototype.draw = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.buffer !== null);

	this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer);
	this.context.drawArrays(this.context.TRIANGLES, 0, this.data.length);
};

array_t.prototype.link = function (attribute)
{
	scaffold.check(arguments.length === 1);
	scaffold.check.type(attribute, attributes.attribute_t);
	scaffold.check(this.buffer !== null);

	this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer);
	this.context.enableVertexAttribArray(attribute.locator);
	this.context.vertexAttribPointer(attribute.locator, 3, this.context.FLOAT, false, 0, 0);
};

array_t.prototype.transfer = function ()
{
	scaffold.check(arguments.length === 0);
	scaffold.check(this.buffer !== null);

	this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer);
	this.context.bufferData(this.context.ARRAY_BUFFER, this.data, this.context.STATIC_DRAW);
};

module.exports = array_t;
