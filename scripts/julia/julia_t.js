var scaffold = require('<scaffold>');
var program_t = require('../webgl/program_t.js');
var sources = require('./sources.js');
var shaders = require('../webgl/shaders/shaders.js');

var julia_t = function julia_t(context)
{
	var fs;
	var vs;

	scaffold.check(arguments.length === 1);
	scaffold.check.type(context, global.WebGLRenderingContext);

	fs = new shaders.fragment_t(context, sources.fs);
	vs = new shaders.vertex_t(context, sources.vs);

	program_t.call(this, context, fs, vs);
};

scaffold.types.extend(julia_t, program_t);

module.exports = julia_t;
