var logic = function (model, scope)
{
	this.on('click', function ()
	{
		var json;
		var vm;

		json =
		{
			'lower' : 0.0,
			'upper' : 255.0,
			'step' : 1.0
		};

		vm = model.modelify(json);

		vm.attach('value', scope.get('r'));

		model.attach('red', vm);

		vm = model.modelify(json);

		vm.attach('value', scope.get('g'));

		model.attach('green', vm);

		vm = model.modelify(json);

		vm.attach('value', scope.get('b'));

		model.attach('blue', vm);
	});
};

module.exports = logic;
