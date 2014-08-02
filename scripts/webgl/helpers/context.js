var scaffold = require('<scaffold>');

var context = function (canvas)
{
	var result;

	scaffold.check(arguments.length === 1);
	scaffold.check.type(canvas, global.HTMLCanvasElement);

	result = canvas.getContext('webgl');

	if (result !== null)
	{
		return result;
	}

	result = canvas.getContext('experimental-webgl');

	if (result !== null)
	{
		return result;
	}

	throw new global.Error('Could not find a WebGL context!');
};

module.exports = context;
