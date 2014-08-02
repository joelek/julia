var scaffold = require('<scaffold>');

var listenable_t = function listenable_t(onget, onset, value)
{
	scaffold.check(arguments.length === 3);
	scaffold.check.callable(onget);
	scaffold.check.callable(onset);

	this.onget = onget;
	this.onset = onset;
	this.value = null;

	this.set(value);
};

scaffold.types.define(listenable_t);

listenable_t.prototype.attach = function (wrapper, name)
{
	var property;

	scaffold.check(arguments.length === 2);
	scaffold.check.object(wrapper);
	scaffold.check.string(name);

	property = {};

	property.get = this.get.bind(this);
	property.set = this.set.bind(this);

	global.Object.defineProperty(wrapper, name, property);
};

listenable_t.prototype.get = function ()
{
	scaffold.check(arguments.length === 0);

	this.onget(this.value);

	return this.value;
};

listenable_t.prototype.set = function (value)
{
	scaffold.check(arguments.length === 1);

	this.value = this.onset(this.value, value);
};

module.exports = listenable_t;
