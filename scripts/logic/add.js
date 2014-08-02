var logic = function (model, scope)
{
	this.on('click', function ()
	{
		model.get('colors').append(model.modelify({ 'r' : 127, 'g' : 127, 'b' : 127 }));
	});
};

module.exports = logic;
