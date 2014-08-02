var scaffold = require('<scaffold>');
var attributes = require('../attributes/attributes.js');
var buffers = require('../buffers/buffers.js');

var shape_t = function shape_t(context, indices, vectors)
{
	scaffold.check(arguments.length === 3);
	scaffold.check.type(context, global.WebGLRenderingContext);
	scaffold.check.number.array(indices);
	scaffold.check.number.array(vectors);

	if (indices.length % 3 !== 0)
	{
		throw new global.Error('Only triangle layouts are supported at this point!');
	}

	if (vectors.length % 3 !== 0)
	{
		throw new global.Error('Only three-dimensional shapes are supported at this point!');
	}

	this.context = context;
	this.indices = new buffers.element_t(context, indices);
	this.vectors = new buffers.array_t(context, vectors);
};

scaffold.types.define(shape_t);

shape_t.prototype.draw = function (attribute)
{
	scaffold.check(arguments.length === 1);
	scaffold.check.type(attribute, attributes.attribute_t);

	this.indices.transfer();
	this.vectors.transfer();

	this.vectors.link(attribute);
	this.indices.draw();
};

module.exports = shape_t;
