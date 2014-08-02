var scaffold = require('<scaffold>');

var matrix_t = function matrix_t(c0r0, c0r1, c1r0, c1r1, c2r0, c2r1)
{
	scaffold.check(arguments.length === 6);
	scaffold.check.number(c0r0);
	scaffold.check.number(c0r1);
	scaffold.check.number(c1r0);
	scaffold.check.number(c1r1);
	scaffold.check.number(c2r0);
	scaffold.check.number(c2r1);

	this.c0r0 = c0r0;
	this.c0r1 = c0r1;
	this.c1r0 = c1r0;
	this.c1r1 = c1r1;
	this.c2r0 = c2r0;
	this.c2r1 = c2r1;
};

scaffold.types.define(matrix_t);

matrix_t.union = function (one, two)
{
	var c0r0;
	var c0r1;
	var c1r0;
	var c1r1;
	var c2r0;
	var c2r1;

	scaffold.check(arguments.length === 2);
	scaffold.check.type(one, matrix_t);
	scaffold.check.type(two, matrix_t);

	c0r0 = one.c0r0*two.c0r0 + one.c1r0*two.c0r1;
	c0r1 = one.c0r1*two.c0r0 + one.c1r1*two.c0r1;
	c1r0 = one.c0r0*two.c1r0 + one.c1r0*two.c1r1;
	c1r1 = one.c0r1*two.c1r0 + one.c1r1*two.c1r1;
	c2r0 = one.c0r0*two.c2r0 + one.c1r0*two.c2r1 + one.c2r0;
	c2r1 = one.c0r1*two.c2r0 + one.c1r1*two.c2r1 + one.c2r1;

	return new matrix_t(c0r0, c0r1, c1r0, c1r1, c2r0, c2r1);
};

matrix_t.prototype.array = function ()
{
	var c0r0;
	var c0r1;
	var c1r0;
	var c1r1;
	var c2r0;
	var c2r1;

	scaffold.check(arguments.length === 0);

	c0r0 = this.c0r0;
	c0r1 = this.c0r1;
	c1r0 = this.c1r0;
	c1r1 = this.c1r1;
	c2r0 = this.c2r0;
	c2r1 = this.c2r1;

	return [c0r0, c0r1, 0.0, c1r0, c1r1, 0.0, c2r0, c2r1, 1.0];
};

matrix_t.prototype.transform = function (x, y)
{
	var result;

	scaffold.check(arguments.length === 2);
	scaffold.check.number(x);
	scaffold.check.number(y);

	result = {};

	result['x'] = this.c0r0*x + this.c1r0*y + this.c2r0;
	result['y'] = this.c0r1*x + this.c1r1*y + this.c2r1;

	return result;
};

module.exports = matrix_t;
