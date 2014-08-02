var clamp = function (lower, value, upper)
{
	return global.Math.max(lower, global.Math.min(value, upper));
};

module.exports = clamp;
