var clamp = require('./clamp.js');

var logic = function (model, scope)
{
	var left;
	var update;
	var mousedown;
	var mousemove;
	var mouseup;

	left = function (lower, upper, value)
	{
		return (clamp(lower, value, upper) - lower)/(upper - lower)*100.0;
	};

	scope.attach('left', scope.computed(['lower', 'upper', 'value'], left));

	update = function (event)
	{
		var rect;
		var lower;
		var upper;
		var value;
		var step;

		rect = this.get().getBoundingClientRect();

		lower = scope.get('lower').json();
		upper = scope.get('upper').json();

		value = (event.clientX - rect.left)/rect.width*(upper - lower) + lower;
		value = clamp(lower, value, upper);

		if (scope.has('step'))
		{
			step = scope.get('step').json();

			value = global.Math.round(value/step)*step;
		}

		scope.get('value').set(value);
	};

	update = update.bind(this);

	mousedown = function (event)
	{
		this.root().on('mouseleave', mouseup);
		this.root().on('mousemove', mousemove);
		this.root().on('mouseup', mouseup);

		update(event);
	};

	mousedown = mousedown.bind(this);

	mousemove = function (event)
	{
		update(event);
	};

	mousemove = mousemove.bind(this);

	mouseup = function (event)
	{
		this.root().off('mouseleave', mouseup);
		this.root().off('mousemove', mousemove);
		this.root().off('mouseup', mouseup);
	};

	mouseup = mouseup.bind(this);

	this.on('mousedown', mousedown);
};

module.exports = logic;
