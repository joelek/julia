var option = function (model, scope)
{
	var change;
	var mouseup;

	change = function ()
	{
		var value;

		value = scope.get('value').json();

		if (value === true)
		{
			this.remove('option-off');
			this.add('option-on');
		}

		if (value === false)
		{
			this.remove('option-on');
			this.add('option-off');
		}
	};

	change = change.bind(this);

	scope.get('value').on('change', change);

	mouseup = function (event)
	{
		var value;

		value = scope.get('value').json();

		if (value === true)
		{
			scope.get('value').set(false);
		}

		if (value === false)
		{
			scope.get('value').set(true);
		}
	};

	mouseup = mouseup.bind(this);

	this.on('mouseup', mouseup);
};

module.exports = option;
