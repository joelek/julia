var scaffold = require('<scaffold>');
var webgl = require('<webgl>');
var sources = require('./sources.js');

var julia_t = function julia_t(context)
{
	var fs;
	var vs;

	scaffold.check(arguments.length === 1);
	scaffold.check.type(context, global.WebGLRenderingContext);

	fs = new webgl.shaders.fragment_t(context, sources.fs);
	vs = new webgl.shaders.vertex_t(context, sources.vs);

	webgl.program_t.call(this, context, fs, vs);
};

scaffold.types.extend(julia_t, webgl.program_t);

module.exports = julia_t;
