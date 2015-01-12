var webgl = require('<webgl>');
var julia_t = require('../julia/julia_t.js');

var logic = function (model, scope)
{
	var context;
	var element;
	var program;
	var quad;
	var render;
	var resize;
	var texture;
	var transform;
	var update;

	element = this.get();
	context = webgl.helpers.context(element);
	program = new julia_t(context);
	quad = new webgl.shapes.quad_t(context);
	texture = new webgl.textures.texture_t(context);
	transform = new webgl.math.transform_t();

	resize = function ()
	{
		var h;
		var w;

		w = element.offsetWidth;
		h = element.offsetHeight;

		context.viewport(0, 0, w, h);

		scope.get('w').set(w);
		scope.get('h').set(h);

		transform.settings.kx = w/scope.get('k').json();
		transform.settings.ky = h/scope.get('k').json();
	};

	resize();

	global.addEventListener('resize', resize);

	update = function ()
	{
		var colors;
		var result;

		colors = scope.get('colors').json();
		result = [];

		colors.forEach(function (color) {
			result.push(color.r);
			result.push(color.g);
			result.push(color.b);
			result.push(255);
		});

		texture.transfer(result, colors.length, 1);
	};

	scope.get('colors').on('change', update);

	render = function ()
	{
		context.clearColor(0.0, 0.0, 0.0, 1.0);
		context.clear(context.COLOR_BUFFER_BIT);

		program.use();

		program.uniforms.colorMap = 0;
		program.uniforms.C = scope.get('real').get('value').json();
		program.uniforms.D = scope.get('imaginary').get('value').json();
		program.uniforms.power = scope.get('exponent').get('value').json();
		program.uniforms.limit = scope.get('iterations').get('value').json();
		program.uniforms.antiAlias = scope.get('hq').get('value').json();
		program.uniforms.viewportWidth = scope.get('w').json();
		program.uniforms.viewportHeight = scope.get('h').json();
		program.uniforms.textureMatrix = transform.matrices.outer.array();

		quad.draw(program.attributes.vertexPosition);

		global.requestAnimationFrame(render);
	};

	var contextmenu;
	var mousedown;
	var mousemove_pan;
	var mousemove_rotate;
	var mouseup_pan;
	var mouseup_rotate;
	var previous;
	var wheel;

	previous = null;

	contextmenu = function (event)
	{
		event.preventDefault();
		event.stopPropagation();
	};

	this.on('contextmenu', contextmenu);

	mousedown = function (event)
	{
		previous = webgl.helpers.coordinates(element, event);

		if (event.button === 0)
		{
			this.on('mouseleave', mouseup_pan);
			this.on('mousemove', mousemove_pan);
			this.on('mouseup', mouseup_pan);

			return;
		}

		if (event.button === 2)
		{
			this.on('mouseleave', mouseup_rotate);
			this.on('mousemove', mousemove_rotate);
			this.on('mouseup', mouseup_rotate);

			return;
		}
	};

	mousedown = mousedown.bind(this);

	this.on('mousedown', mousedown);

	mousemove_pan = function (event)
	{
		var cos;
		var current;
		var kx;
		var ky;
		var sin;

		if (previous !== null)
		{
			current = webgl.helpers.coordinates(element, event);

			cos = global.Math.cos(transform.settings.angle);
			sin = global.Math.sin(transform.settings.angle);

			kx = transform.settings.kx;
			ky = transform.settings.ky;

			transform.settings.x += transform.settings.scale*(kx*cos*(previous.x - current.x) + ky*sin*(previous.y - current.y));
			transform.settings.y += transform.settings.scale*(ky*cos*(previous.y - current.y) - kx*sin*(previous.x - current.x));

			previous = current;
		}
	};

	mousemove_pan = mousemove_pan.bind(this);

	mousemove_rotate = function (event)
	{
		var cos;
		var current;
		var den;
		var kx;
		var ky;
		var num;
		var sin;

		if (previous !== null)
		{
			current = webgl.helpers.coordinates(element, event);

			cos = global.Math.cos(transform.settings.angle);
			sin = global.Math.sin(transform.settings.angle);

			kx = transform.settings.kx;
			ky = transform.settings.ky;

			num = ky*current.y*(cos*kx*previous.x + sin*ky*previous.y) + kx*current.x*(sin*kx*previous.x - cos*ky*previous.y);
			den = kx*current.x*(cos*kx*previous.x + sin*ky*previous.y) - ky*current.y*(sin*kx*previous.x - cos*ky*previous.y);

			transform.settings.angle = global.Math.atan2(num, den);

			previous = current;
		}
	};

	mousemove_rotate = mousemove_rotate.bind(this);

	mouseup_pan = function (event)
	{
		previous = null;

		this.off('mousemove', mousemove_pan);
		this.off('mouseup', mouseup_pan);
	};

	mouseup_pan = mouseup_pan.bind(this);

	mouseup_rotate = function (event)
	{
		previous = null;

		this.off('mousemove', mousemove_rotate);
		this.off('mouseup', mouseup_rotate);
	};

	mouseup_rotate = mouseup_rotate.bind(this);

	wheel = function (event)
	{
		var coordinates;
		var cos;
		var scale;
		var sin;
		var x;
		var y;

		coordinates = webgl.helpers.coordinates(element, event);

		cos = global.Math.cos(transform.settings.angle);
		sin = global.Math.sin(transform.settings.angle);

		scale = (event.deltaY > 0 ? 2.0 : 0.5)*transform.settings.scale;
		x = (cos*transform.settings.kx*coordinates.x + sin*transform.settings.ky*coordinates.y)*(transform.settings.scale - scale);
		y = (cos*transform.settings.ky*coordinates.y - sin*transform.settings.kx*coordinates.x)*(transform.settings.scale - scale);

		transform.settings.scale = scale;
		transform.settings.x += x;
		transform.settings.y += y;
	};

	this.on('wheel', wheel);

	render();
};

module.exports = logic;
