var scaffold = require('<scaffold>');
var listenable_t = require('./listenable_t.js');
var matrix_t = require('./matrices/matrix_t.js');

var transform_t = function transform_t()
{
	var dirty;
	var onget;
	var onset;

	scaffold.check(arguments.length === 0);

	dirty = true;

	onget = function (stored)
	{

	};

	onget = onget.bind(this);

	onset = function (stored, value)
	{
		if (stored !== value)
		{
			dirty = true;
		}

		return value;
	};

	onset = onset.bind(this);

	this.settings = {};

	new listenable_t(onget, onset, 0.0).attach(this.settings, 'angle');
	new listenable_t(onget, onset, 1.0).attach(this.settings, 'kx');
	new listenable_t(onget, onset, 1.0).attach(this.settings, 'ky');
	new listenable_t(onget, onset, 1.0).attach(this.settings, 'scale');
	new listenable_t(onget, onset, 0.0).attach(this.settings, 'x');
	new listenable_t(onget, onset, 0.0).attach(this.settings, 'y');

	onget = function (stored)
	{
		if (dirty)
		{
			this.recompute();

			dirty = false;
		}
	};

	onget = onget.bind(this);

	onset = function (stored, value)
	{
		return value;
	};

	onset = onset.bind(this);

	this.matrices = {};

	new listenable_t(onget, onset, null).attach(this.matrices, 'inner');
	new listenable_t(onget, onset, null).attach(this.matrices, 'outer');
};

scaffold.types.define(transform_t);

transform_t.prototype.recompute = function ()
{
	var c0r0;
	var c0r1;
	var c1r0;
	var c1r1;
	var c2r0;
	var c2r1;
	var cos;
	var fx;
	var fy;
	var sin;

	scaffold.check(arguments.length === 0);

	cos = global.Math.cos(this.settings.angle);
	sin = global.Math.sin(this.settings.angle);

	fx = this.settings.scale*this.settings.kx;
	fy = this.settings.scale*this.settings.ky;

	c0r0 = (0.0 + cos)*fx;
	c0r1 = (0.0 - sin)*fx;
	c1r0 = (0.0 + sin)*fy;
	c1r1 = (0.0 + cos)*fy;
	c2r0 = this.settings.x;
	c2r1 = this.settings.y;

	this.matrices.outer = new matrix_t(c0r0, c0r1, c1r0, c1r1, c2r0, c2r1);

	fx = 1.0/fx;
	fy = 1.0/fy;

	c0r0 = (0.0 + cos)*fx;
	c0r1 = (0.0 + sin)*fy;
	c1r0 = (0.0 - sin)*fx;
	c1r1 = (0.0 + cos)*fy;
	c2r0 = (0.0 - this.settings.x*cos + this.settings.y*sin)*fx;
	c2r1 = (0.0 - this.settings.x*sin - this.settings.y*cos)*fy;

	this.matrices.inner = new matrix_t(c0r0, c0r1, c1r0, c1r1, c2r0, c2r1);
};

module.exports = transform_t;
