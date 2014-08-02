var scaffold = require('<scaffold>');

var coordinates = function (canvas, event)
{
	var rect;
	var x;
	var y;

	scaffold.check(arguments.length === 2);
	scaffold.check.type(canvas, global.HTMLCanvasElement);
	scaffold.check.type(event, global.Event);

	rect = canvas.getBoundingClientRect();

	x = 2.0*(event.clientX - rect.left)/rect.width - 1.0;
	y = 1.0 - 2.0*(event.clientY - rect.top)/rect.height;

	return { 'x' : x, 'y' : y };
};

module.exports = coordinates;
