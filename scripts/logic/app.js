var scaffold = require('<scaffold>');
var clamp = require('./clamp.js');

var app = function (model, scope)
{
	var change;
	var colors;
	var message;

	try
	{
		message = global.JSON.parse(global.atob(global.location.hash.substring(1)));

		if (scaffold.is.number(message['0']))
		{
			model.get('real').get('value').set(clamp(-1.0, message['0'], 1.0));
		}

		if (scaffold.is.number(message['1']))
		{
			model.get('imaginary').get('value').set(clamp(-1.0, message['1'], 1.0));
		}

		if (scaffold.is.number(message['2']))
		{
			model.get('exponent').get('value').set(clamp(2, message['2'], 10));
		}

		if (scaffold.is.number(message['3']))
		{
			model.get('iterations').get('value').set(clamp(1, message['3'], 128));
		}

		if (scaffold.is.array(message['4']))
		{
			colors = message['4'].map(function (message)
			{
				var r;
				var g;
				var b;

				if (scaffold.is.number(message['0']))
				{
					r = clamp(0, message['0'], 255);
				}
				else
				{
					r = 0;
				}

				if (scaffold.is.number(message['1']))
				{
					g = clamp(0, message['1'], 255);
				}
				else
				{
					g = 0;
				}

				if (scaffold.is.number(message['2']))
				{
					b = clamp(0, message['2'], 255);
				}
				else
				{
					b = 0;
				}

				return { 'r' : r, 'g' : g, 'b': b};
			});

			model.get('colors').set(colors);
		}
	}
	catch (error) {}

	change = function ()
	{
		var json;
		var message;

		json = model.json();

		message = {};

		message['0'] = json['real']['value'];
		message['1'] = json['imaginary']['value'];
		message['2'] = json['exponent']['value'];
		message['3'] = json['iterations']['value'];
		message['4'] = json['colors'].map(function (color)
		{
			var message;

			message = {};

			message['0'] = color['r'];
			message['1'] = color['g'];
			message['2'] = color['b'];

			return message;
		});

		global.location.hash = global.btoa(global.JSON.stringify(message));
	};

	model.on('change', change);
};

module.exports = app;
