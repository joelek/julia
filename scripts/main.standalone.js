(function (exports, global, module, require)
{
	'use strict';

	(function (db)
	{
		db[6] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[5] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[5].config['./is.js'] = 6;
		db[7] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[7].config['./is.js'] = 6;
		db[9] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[9].config['./check.js'] = 5;
		db[10] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[10].config['./check.js'] = 5;
		db[8] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[8].config['./define.js'] = 9;
		db[8].config['./extend.js'] = 10;
		db[4] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[4].config['./check.js'] = 5;
		db[4].config['./fallback.js'] = 7;
		db[4].config['./is.js'] = 6;
		db[4].config['./types.js'] = 8;
		db[12] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[12].config['<scaffold>'] = 4;
		db[13] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[13].config['<scaffold>'] = 4;
		db[14] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[14].config['<scaffold>'] = 4;
		db[11] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[11].config['./consume.js'] = 12;
		db[11].config['./delay.js'] = 13;
		db[11].config['./names.js'] = 14;
		db[19] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[19].config['<scaffold>'] = 4;
		db[20] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[20].config['<scaffold>'] = 4;
		db[20].config['./events/event_t.js'] = 19;
		db[18] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[18].config['<scaffold>'] = 4;
		db[18].config['./event_t.js'] = 19;
		db[18].config['../observee_t.js'] = 20;
		db[21] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[21].config['<scaffold>'] = 4;
		db[21].config['./event_t.js'] = 19;
		db[21].config['../observee_t.js'] = 20;
		db[22] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[22].config['<scaffold>'] = 4;
		db[22].config['./event_t.js'] = 19;
		db[22].config['../observee_t.js'] = 20;
		db[23] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[23].config['<scaffold>'] = 4;
		db[23].config['./event_t.js'] = 19;
		db[23].config['../observee_t.js'] = 20;
		db[24] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[24].config['<scaffold>'] = 4;
		db[24].config['./event_t.js'] = 19;
		db[24].config['../observee_t.js'] = 20;
		db[17] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[17].config['./append_t.js'] = 18;
		db[17].config['./attach_t.js'] = 21;
		db[17].config['./change_t.js'] = 22;
		db[17].config['./detach_t.js'] = 23;
		db[17].config['./event_t.js'] = 19;
		db[17].config['./splice_t.js'] = 24;
		db[25] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[25].config['<scaffold>'] = 4;
		db[25].config['./events/events.js'] = 17;
		db[25].config['./observee_t.js'] = 20;
		db[16] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[16].config['<scaffold>'] = 4;
		db[16].config['./events/events.js'] = 17;
		db[16].config['./model_t.js'] = 25;
		db[26] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[26].config['<scaffold>'] = 4;
		db[26].config['./events/events.js'] = 17;
		db[26].config['./model_t.js'] = 25;
		db[28] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[28].config['<scaffold>'] = 4;
		db[28].config['./events/events.js'] = 17;
		db[28].config['./model_t.js'] = 25;
		db[29] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[29].config['<scaffold>'] = 4;
		db[29].config['./events/events.js'] = 17;
		db[29].config['./model_t.js'] = 25;
		db[30] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[30].config['<scaffold>'] = 4;
		db[30].config['./events/events.js'] = 17;
		db[30].config['./model_t.js'] = 25;
		db[27] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[27].config['<scaffold>'] = 4;
		db[27].config['./array_t.js'] = 16;
		db[27].config['./boolean_t.js'] = 26;
		db[27].config['./number_t.js'] = 28;
		db[27].config['./object_t.js'] = 29;
		db[27].config['./string_t.js'] = 30;
		db[15] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[15].config['./array_t.js'] = 16;
		db[15].config['./boolean_t.js'] = 26;
		db[15].config['./model_t.js'] = 25;
		db[15].config['./modelify.js'] = 27;
		db[15].config['./number_t.js'] = 28;
		db[15].config['./object_t.js'] = 29;
		db[15].config['./observee_t.js'] = 20;
		db[15].config['./string_t.js'] = 30;
		db[35] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[35].config['<scaffold>'] = 4;
		db[34] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[34].config['<scaffold>'] = 4;
		db[34].config['./controller_t.js'] = 35;
		db[34].config['../../models/events/events.js'] = 17;
		db[34].config['../../models/models.js'] = 15;
		db[36] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[36].config['<scaffold>'] = 4;
		db[36].config['./controller_t.js'] = 35;
		db[36].config['../../models/events/events.js'] = 17;
		db[36].config['../../models/models.js'] = 15;
		db[37] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[37].config['<scaffold>'] = 4;
		db[37].config['./controller_t.js'] = 35;
		db[37].config['../../models/events/events.js'] = 17;
		db[37].config['../../models/models.js'] = 15;
		db[33] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[33].config['./checkbox_t.js'] = 34;
		db[33].config['./controller_t.js'] = 35;
		db[33].config['./input_t.js'] = 36;
		db[33].config['./select_t.js'] = 37;
		db[40] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[40].config['<scaffold>'] = 4;
		db[40].config['../../models/events/events.js'] = 17;
		db[40].config['../../models/models.js'] = 15;
		db[39] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[39].config['<scaffold>'] = 4;
		db[39].config['./controller_t.js'] = 40;
		db[39].config['../../models/models.js'] = 15;
		db[41] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[41].config['<scaffold>'] = 4;
		db[41].config['./controller_t.js'] = 40;
		db[41].config['../../models/models.js'] = 15;
		db[42] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[42].config['<scaffold>'] = 4;
		db[42].config['./controller_t.js'] = 40;
		db[42].config['../../models/models.js'] = 15;
		db[38] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[38].config['./attribute_t.js'] = 39;
		db[38].config['./controller_t.js'] = 40;
		db[38].config['./style_t.js'] = 41;
		db[38].config['./text_t.js'] = 42;
		db[45] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[45].config['<scaffold>'] = 4;
		db[44] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[44].config['<scaffold>'] = 4;
		db[44].config['./controller_t.js'] = 45;
		db[44].config['../../models/events/events.js'] = 17;
		db[44].config['../../models/models.js'] = 15;
		db[47] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[47].config['<scaffold>'] = 4;
		db[46] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[46].config['<scaffold>'] = 4;
		db[46].config['./controller_t.js'] = 45;
		db[46].config['../../models/events/events.js'] = 17;
		db[46].config['../../models/models.js'] = 15;
		db[46].config['./placeholder_t.js'] = 47;
		db[43] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[43].config['./array_t.js'] = 44;
		db[43].config['./controller_t.js'] = 45;
		db[43].config['./object_t.js'] = 46;
		db[32] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[32].config['./form/controllers.js'] = 33;
		db[32].config['./node/controllers.js'] = 38;
		db[32].config['./tree/controllers.js'] = 43;
		db[49] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[49].config['<scaffold>'] = 4;
		db[48] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[48].config['<scaffold>'] = 4;
		db[48].config['./elements_t.js'] = 49;
		db[31] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[31].config['<scaffold>'] = 4;
		db[31].config['./controllers/controllers.js'] = 32;
		db[31].config['./element_t.js'] = 48;
		db[31].config['./helpers/helpers.js'] = 11;
		db[31].config['./models/models.js'] = 15;
		db[3] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[3].config['<scaffold>'] = 4;
		db[3].config['./helpers/helpers.js'] = 11;
		db[3].config['./models/models.js'] = 15;
		db[3].config['./traverser_t.js'] = 31;
		db[2] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[2].config['./views_t.js'] = 3;
		db[50] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[51] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[53] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[52] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[52].config['<scaffold>'] = 4;
		db[52].config['./clamp.js'] = 53;
		db[57] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[57].config['<scaffold>'] = 4;
		db[58] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[58].config['<scaffold>'] = 4;
		db[58].config['./attribute_t.js'] = 57;
		db[56] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[56].config['./attribute_t.js'] = 57;
		db[56].config['./factory.js'] = 58;
		db[61] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[61].config['<scaffold>'] = 4;
		db[60] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[60].config['<scaffold>'] = 4;
		db[60].config['../attributes/attributes.js'] = 56;
		db[60].config['./buffer_t.js'] = 61;
		db[62] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[62].config['<scaffold>'] = 4;
		db[62].config['./buffer_t.js'] = 61;
		db[59] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[59].config['./array_t.js'] = 60;
		db[59].config['./buffer_t.js'] = 61;
		db[59].config['./element_t.js'] = 62;
		db[64] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[64].config['<scaffold>'] = 4;
		db[65] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[65].config['<scaffold>'] = 4;
		db[63] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[63].config['./context.js'] = 64;
		db[63].config['./coordinates.js'] = 65;
		db[67] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[67].config['<scaffold>'] = 4;
		db[70] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[70].config['<scaffold>'] = 4;
		db[69] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[69].config['<scaffold>'] = 4;
		db[69].config['./matrix_t.js'] = 70;
		db[68] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[68].config['./identity_t.js'] = 69;
		db[68].config['./matrix_t.js'] = 70;
		db[71] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[71].config['<scaffold>'] = 4;
		db[71].config['./listenable_t.js'] = 67;
		db[71].config['./matrices/matrix_t.js'] = 70;
		db[66] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[66].config['./listenable_t.js'] = 67;
		db[66].config['./matrices/matrices.js'] = 68;
		db[66].config['./transform_t.js'] = 71;
		db[74] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[74].config['<scaffold>'] = 4;
		db[73] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[73].config['<scaffold>'] = 4;
		db[73].config['./shader_t.js'] = 74;
		db[75] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[75].config['<scaffold>'] = 4;
		db[75].config['./shader_t.js'] = 74;
		db[72] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[72].config['./fragment_t.js'] = 73;
		db[72].config['./shader_t.js'] = 74;
		db[72].config['./vertex_t.js'] = 75;
		db[78] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[78].config['<scaffold>'] = 4;
		db[78].config['../attributes/attributes.js'] = 56;
		db[78].config['../buffers/buffers.js'] = 59;
		db[77] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[77].config['<scaffold>'] = 4;
		db[77].config['./shape_t.js'] = 78;
		db[76] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[76].config['./quad_t.js'] = 77;
		db[76].config['./shape_t.js'] = 78;
		db[80] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[80].config['<scaffold>'] = 4;
		db[79] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[79].config['./texture_t.js'] = 80;
		db[83] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[83].config['<scaffold>'] = 4;
		db[82] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[82].config['<scaffold>'] = 4;
		db[82].config['./uniform_t.js'] = 83;
		db[85] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[85].config['<scaffold>'] = 4;
		db[85].config['./uniform_t.js'] = 83;
		db[86] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[86].config['<scaffold>'] = 4;
		db[86].config['./uniform_t.js'] = 83;
		db[87] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[87].config['<scaffold>'] = 4;
		db[87].config['./uniform_t.js'] = 83;
		db[88] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[88].config['<scaffold>'] = 4;
		db[88].config['./uniform_t.js'] = 83;
		db[84] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[84].config['<scaffold>'] = 4;
		db[84].config['./bool_t.js'] = 82;
		db[84].config['./float_t.js'] = 85;
		db[84].config['./float_mat3_t.js'] = 86;
		db[84].config['./float_vec3_t.js'] = 87;
		db[84].config['./sampler_2d_t.js'] = 88;
		db[81] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[81].config['./bool_t.js'] = 82;
		db[81].config['./factory.js'] = 84;
		db[81].config['./float_t.js'] = 85;
		db[81].config['./float_mat3_t.js'] = 86;
		db[81].config['./float_vec3_t.js'] = 87;
		db[81].config['./sampler_2d_t.js'] = 88;
		db[81].config['./uniform_t.js'] = 83;
		db[89] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[89].config['<scaffold>'] = 4;
		db[89].config['./attributes/attributes.js'] = 56;
		db[89].config['./shaders/shaders.js'] = 72;
		db[89].config['./uniforms/uniforms.js'] = 81;
		db[55] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[55].config['./attributes/attributes.js'] = 56;
		db[55].config['./buffers/buffers.js'] = 59;
		db[55].config['./helpers/helpers.js'] = 63;
		db[55].config['./math/math.js'] = 66;
		db[55].config['./shaders/shaders.js'] = 72;
		db[55].config['./shapes/shapes.js'] = 76;
		db[55].config['./textures/textures.js'] = 79;
		db[55].config['./uniforms/uniforms.js'] = 81;
		db[55].config['./program_t.js'] = 89;
		db[92] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[93] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[91] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[91].config['./fs.glsl'] = 92;
		db[91].config['./vs.glsl'] = 93;
		db[90] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[90].config['<scaffold>'] = 4;
		db[90].config['../webgl/program_t.js'] = 89;
		db[90].config['./sources.js'] = 91;
		db[90].config['../webgl/shaders/shaders.js'] = 72;
		db[54] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[54].config['../webgl/index.js'] = 55;
		db[54].config['../julia/julia_t.js'] = 90;
		db[94] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[95] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[96] = { 'config' : {}, 'module' : { 'exports' : {} } };
		db[96].config['./clamp.js'] = 53;
		db[1] = { 'config' : {}, 'module' : module };
		db[1].config['<views>'] = 2;
		db[1].config['./model.json'] = 50;
		db[1].config['./logic/add.js'] = 51;
		db[1].config['./logic/app.js'] = 52;
		db[1].config['./logic/canvas.js'] = 54;
		db[1].config['./logic/color.js'] = 94;
		db[1].config['./logic/option.js'] = 95;
		db[1].config['./logic/slider.js'] = 96;

		exports = function (id)
		{
			return db[id].module.exports;
		};

		module = function (id)
		{
			return db[id].module;
		};

		require = function (id)
		{
			return function (name)
			{
				return db[db[id].config[name]].module.exports;
			};
		};
	})([]);

	(function (exports, global, module, require)
	{
		var array = function (subject)
		{
			return subject != null && subject.constructor === global.Array;
		};

		var boolean = function (subject)
		{
			return subject != null && subject.constructor === global.Boolean;
		};

		var callable = function (subject)
		{
			return subject != null && subject.constructor === global.Function;
		};

		var number = function (subject)
		{
			return subject != null && subject.constructor === global.Number;
		};

		var object = function (subject)
		{
			return subject != null && subject.constructor === global.Object;
		};

		var string = function (subject)
		{
			return subject != null && subject.constructor === global.String;
		};

		var type = function (subject, constructor)
		{
			return subject != null && subject instanceof constructor;
		};

		exports.array = array;
		exports.boolean = boolean;
		exports.callable = callable;
		exports.number = number;
		exports.object = object;
		exports.string = string;
		exports.type = type;
	})(exports(6), global, module(6), require(6));

	(function (exports, global, module, require)
	{
		var is = require('./is.js');

		var check = function (boolean)
		{
			check.boolean(boolean);

			if (!boolean)
			{
				throw new global.Error('Check failed!');
			}
		};

		check.array = function (subject)
		{
			if (!is.array(subject))
			{
				throw new global.Error('Expected array!');
			}
		};

		check.array.array = function (subject)
		{
			var i;
			var l;

			check.array(subject);

			for (i = 0, l = subject.length; i < l; i++)
			{
				check.array(subject[i]);
			}
		};

		check.boolean = function (subject)
		{
			if (!is.boolean(subject))
			{
				throw new global.Error('Expected boolean!');
			}
		};

		check.boolean.array = function (subject)
		{
			var i;
			var l;

			check.array(subject);

			for (i = 0, l = subject.length; i < l; i++)
			{
				check.boolean(subject[i]);
			}
		};

		check.callable = function (subject)
		{
			if (!is.callable(subject))
			{
				throw new global.Error('Expected callable!');
			}
		};

		check.callable.array = function (subject)
		{
			var i;
			var l;

			check.array(subject);

			for (i = 0, l = subject.length; i < l; i++)
			{
				check.callable(subject[i]);
			}
		};

		check.number = function (subject)
		{
			if (!is.number(subject))
			{
				throw new global.Error('Expected number!');
			}
		};

		check.number.array = function (subject)
		{
			var i;
			var l;

			check.array(subject);

			for (i = 0, l = subject.length; i < l; i++)
			{
				check.number(subject[i]);
			}
		};

		check.object = function (subject)
		{
			if (!is.object(subject))
			{
				throw new global.Error('Expected object!');
			}
		};

		check.object.array = function (subject)
		{
			var i;
			var l;

			check.array(subject);

			for (i = 0, l = subject.length; i < l; i++)
			{
				check.object(subject[i]);
			}
		};

		check.string = function (subject)
		{
			if (!is.string(subject))
			{
				throw new global.Error('Expected string!');
			}
		};

		check.string.array = function (subject)
		{
			var i;
			var l;

			check.array(subject);

			for (i = 0, l = subject.length; i < l; i++)
			{
				check.string(subject[i]);
			}
		};

		check.type = function (subject, constructor)
		{
			if (!is.type(subject, constructor))
			{
				throw new global.Error('Expected given type!');
			}
		};

		check.type.array = function (subject, constructor)
		{
			var i;
			var l;

			check.array(subject);

			for (i = 0, l = subject.length; i < l; i++)
			{
				check.type(subject[i], constructor);
			}
		};

		module.exports = check;
	})(exports(5), global, module(5), require(5));

	(function (exports, global, module, require)
	{
		var is = require('./is.js');

		var array = function (subject, fallback)
		{
			return is.array(subject) ? subject : fallback;
		};

		var boolean = function (subject, fallback)
		{
			return is.boolean(subject) ? subject : fallback;
		};

		var callable = function (subject, fallback)
		{
			return is.callable(subject) ? subject : fallback;
		};

		var number = function (subject, fallback)
		{
			return is.number(subject) ? subject : fallback;
		};

		var object = function (subject, fallback)
		{
			return is.object(subject) ? subject : fallback;
		};

		var string = function (subject, fallback)
		{
			return is.string(subject) ? subject : fallback;
		};

		var type = function (subject, constructor, fallback)
		{
			return is.type(subject, constructor) ? subject : fallback;
		};

		exports.array = array;
		exports.boolean = boolean;
		exports.callable = callable;
		exports.number = number;
		exports.object = object;
		exports.string = string;
		exports.type = type;
	})(exports(7), global, module(7), require(7));

	(function (exports, global, module, require)
	{
		var check = require('./check.js');

		var define = function (target)
		{
			check.callable(target);

			target.prototype = global.Object.create(null);
		};

		module.exports = define;
	})(exports(9), global, module(9), require(9));

	(function (exports, global, module, require)
	{
		var check = require('./check.js');

		var extend = function (target, source)
		{
			check.callable(target);
			check.callable(source);

			target.prototype = global.Object.create(source.prototype);
			target.prototype.constructor = target;
		};

		module.exports = extend;
	})(exports(10), global, module(10), require(10));

	(function (exports, global, module, require)
	{
		exports.define = require('./define.js');
		exports.extend = require('./extend.js');
	})(exports(8), global, module(8), require(8));

	(function (exports, global, module, require)
	{
		exports.check = require('./check.js');
		exports.fallback = require('./fallback.js');
		exports.is = require('./is.js');
		exports.types = require('./types.js');
	})(exports(4), global, module(4), require(4));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var consume = function (node, name)
		{
			var value;

			scaffold.check(arguments.length === 2);
			scaffold.check.type(node, global.Node);
			scaffold.check.string(name);

			if (!node.hasAttribute(name))
			{
				throw new global.Error('The node does not have an attribute with the name "' + name + '"!');
			}

			value = node.getAttribute(name);

			node.removeAttribute(name);

			return value;
		};

		module.exports = consume;
	})(exports(12), global, module(12), require(12));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var delay = function (callback)
		{
			var readystatechange;

			scaffold.check(arguments.length === 1);
			scaffold.check.callable(callback);

			readystatechange = function (event)
			{
				if (document.readyState !== 'loading')
				{
					document.removeEventListener('readystatechange', readystatechange);

					callback();
				}
			};

			document.addEventListener('readystatechange', readystatechange);

			readystatechange();
		};

		module.exports = delay;
	})(exports(13), global, module(13), require(13));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var names = function (string)
		{
			var array;
			var name;
			var names;
			var re;

			scaffold.check(arguments.length === 1);
			scaffold.check.string(string);

			names = [];
			re = new global.RegExp('{[\\s]*([\\S]+)[\\s]*}', 'gi');

			while ((array = re.exec(string)) !== null)
			{
				name = array[1];

				if (names.indexOf(name) === -1)
				{
					names.push(name);
				}
			}

			return names;
		};

		module.exports = names;
	})(exports(14), global, module(14), require(14));

	(function (exports, global, module, require)
	{
		exports.consume = require('./consume.js');
		exports.delay = require('./delay.js');
		exports.names = require('./names.js');
	})(exports(11), global, module(11), require(11));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var event_t = function event_t()
		{
			scaffold.check(arguments.length === 0);
		};

		scaffold.types.define(event_t);

		event_t.prototype.type = function ()
		{
			throw new global.Error('Abstract!');
		};

		module.exports = event_t;
	})(exports(19), global, module(19), require(19));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var event_t = require('./events/event_t.js');

		var observee_t = function observee_t()
		{
			scaffold.check(arguments.length === 0);

			this.observers = {};
		};

		scaffold.types.define(observee_t);

		observee_t.prototype.broadcast = function (event)
		{
			var i;
			var l;
			var type;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(event, event_t);

			type = event.type();

			if (this.observers[type] != null)
			{
				for (i = 0, l = this.observers[type].length; i < l; i++)
				{
					this.observers[type][i](event);
				}
			}
		};

		observee_t.prototype.off = function (type, observer)
		{
			var index;

			scaffold.check(arguments.length === 2);
			scaffold.check.string(type);
			scaffold.check.callable(observer);

			if (this.observers[type] == null)
			{
				throw new global.Error('This observee has no observers listening for "' + type + '" events!');
			}

			index = this.observers[type].indexOf(observer);

			if (index !== -1)
			{
				this.observers[type].splice(index, 1);
			}
			else
			{
				throw new global.Error('The given observer is not listening for "' + type + '" events from this observee!');
			}
		};

		observee_t.prototype.on = function (type, observer)
		{
			var index;

			scaffold.check(arguments.length === 2);
			scaffold.check.string(type);
			scaffold.check.callable(observer);

			if (this.observers[type] == null)
			{
				this.observers[type] = [];
			}

			index = this.observers[type].indexOf(observer);

			if (index === -1)
			{
				this.observers[type].push(observer);
			}
			else
			{
				throw new global.Error('The given observer is already listening for "' + type + '" events from this observee!');
			}
		};

		module.exports = observee_t;
	})(exports(20), global, module(20), require(20));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var event_t = require('./event_t.js');
		var observee_t = require('../observee_t.js');

		var append_t = function append_t(append, sender, index)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(append, observee_t);
			scaffold.check.type(sender, observee_t);
			scaffold.check.number(index);

			event_t.call(this);

			this.append = append;
			this.sender = sender;
			this.index = index;
		};

		scaffold.types.extend(append_t, event_t);

		append_t.prototype.type = function ()
		{
			scaffold.check(arguments.length === 0);

			return 'append';
		};

		module.exports = append_t;
	})(exports(18), global, module(18), require(18));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var event_t = require('./event_t.js');
		var observee_t = require('../observee_t.js');

		var attach_t = function attach_t(attach, sender, key)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(attach, observee_t);
			scaffold.check.type(sender, observee_t);
			scaffold.check.string(key);

			event_t.call(this);

			this.attach = attach;
			this.sender = sender;
			this.key = key;
		};

		scaffold.types.extend(attach_t, event_t);

		attach_t.prototype.type = function ()
		{
			scaffold.check(arguments.length === 0);

			return 'attach';
		};

		module.exports = attach_t;
	})(exports(21), global, module(21), require(21));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var event_t = require('./event_t.js');
		var observee_t = require('../observee_t.js');

		var change_t = function change_t(change, sender)
		{
			scaffold.check(arguments.length === 2);
			scaffold.check.type(change, observee_t);
			scaffold.check.type(sender, observee_t);

			event_t.call(this);

			this.change = change;
			this.sender = sender;
		};

		scaffold.types.extend(change_t, event_t);

		change_t.prototype.type = function ()
		{
			scaffold.check(arguments.length === 0);

			return 'change';
		};

		module.exports = change_t;
	})(exports(22), global, module(22), require(22));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var event_t = require('./event_t.js');
		var observee_t = require('../observee_t.js');

		var detach_t = function detach_t(detach, sender, key)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(detach, observee_t);
			scaffold.check.type(sender, observee_t);
			scaffold.check.string(key);

			event_t.call(this);

			this.detach = detach;
			this.sender = sender;
			this.key = key;
		};

		scaffold.types.extend(detach_t, event_t);

		detach_t.prototype.type = function ()
		{
			scaffold.check(arguments.length === 0);

			return 'detach';
		};

		module.exports = detach_t;
	})(exports(23), global, module(23), require(23));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var event_t = require('./event_t.js');
		var observee_t = require('../observee_t.js');

		var splice_t = function splice_t(splice, sender, index)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(splice, observee_t);
			scaffold.check.type(sender, observee_t);
			scaffold.check.number(index);

			event_t.call(this);

			this.splice = splice;
			this.sender = sender;
			this.index = index;
		};

		scaffold.types.extend(splice_t, event_t);

		splice_t.prototype.type = function ()
		{
			scaffold.check(arguments.length === 0);

			return 'splice';
		};

		module.exports = splice_t;
	})(exports(24), global, module(24), require(24));

	(function (exports, global, module, require)
	{
		exports.append_t = require('./append_t.js');
		exports.attach_t = require('./attach_t.js');
		exports.change_t = require('./change_t.js');
		exports.detach_t = require('./detach_t.js');
		exports.event_t = require('./event_t.js');
		exports.splice_t = require('./splice_t.js');
	})(exports(17), global, module(17), require(17));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var events = require('./events/events.js');
		var observee_t = require('./observee_t.js');

		var model_t = function model_t()
		{
			scaffold.check(arguments.length === 0);

			observee_t.call(this);
		};

		scaffold.types.extend(model_t, observee_t);

		model_t.prototype.clone = function ()
		{
			throw new global.Error('Abstract!');
		};

		model_t.prototype.json = function ()
		{
			throw new global.Error('Abstract!');
		};

		model_t.prototype.on = function (type, observer)
		{
			scaffold.check(arguments.length === 2);
			scaffold.check.string(type);
			scaffold.check.callable(observer);

			observee_t.prototype.on.call(this, type, observer);

			if (type === 'change')
			{
				observer(new events.change_t(this, this));
			}
		};

		model_t.prototype.related = function (that)
		{
			throw new global.Error('Abstract!');
		};

		model_t.prototype.set = function (json)
		{
			throw new global.Error('Abstract!');
		};

		module.exports = model_t;
	})(exports(25), global, module(25), require(25));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var events = require('./events/events.js');
		var model_t = require('./model_t.js');

		var array_t = function array_t(value, modelify)
		{
			var callback;

			scaffold.check(arguments.length === 2);
			scaffold.check.array(value);
			scaffold.check.callable(modelify);

			model_t.call(this);

			callback = function (event)
			{
				this.broadcast(event);
			};

			callback = callback.bind(this);

			this.callback = callback;
			this.children = [];
			this.modelify = modelify;

			this.set(value);
		};

		scaffold.types.extend(array_t, model_t);

		array_t.prototype.append = function (child)
		{
			var index;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(child, model_t);

			if (child.related(this))
			{
				throw new global.Error('The given child cannot be appended to this model because this model is related to the given child!');
			}

			if (this.index(child) === null)
			{
				child.on('change', this.callback);
			}

			index = this.children.length;

			this.children.splice(index, 0, child);

			this.broadcast(new events.append_t(child, this, index));
			this.broadcast(new events.change_t(child, this));
		};

		array_t.prototype.clear = function ()
		{
			var child;
			var index;

			scaffold.check(arguments.length === 0);

			for (index = this.children.length - 1; (child = this.children[index]) != null; index--)
			{
				this.splice(index);
			}
		};

		array_t.prototype.clone = function ()
		{
			scaffold.check(arguments.length === 0);

			return new array_t(this.json(), this.modelify);
		};

		array_t.prototype.get = function (index)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.number(index);

			if (index < 0 || index >= this.children.length)
			{
				throw new global.Error('This model does not have a child with the index "' + index + '"!');
			}

			return this.children[index];
		};

		array_t.prototype.index = function (child)
		{
			var index;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(child, model_t);

			index = this.children.indexOf(child);

			return index !== -1 ? index : null;
		};

		array_t.prototype.json = function ()
		{
			var child;
			var index;
			var json;

			scaffold.check(arguments.length === 0);

			json = [];

			for (index = 0; (child = this.children[index]) != null; index++)
			{
				json.push(child.json());
			}

			return json;
		};

		array_t.prototype.length = function ()
		{
			scaffold.check(arguments.length === 0);

			return this.children.length;
		};

		array_t.prototype.related = function (that)
		{
			var child;
			var index;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(that, model_t);

			if (that === this)
			{
				return true;
			}

			for (index = 0; (child = this.children[index]) != null; index++)
			{
				if (child.related(that))
				{
					return true;
				}
			}

			return false;
		};

		array_t.prototype.set = function (json)
		{
			var index;
			var item;

			scaffold.check(arguments.length === 1);
			scaffold.check.array(json);

			this.clear();

			for (index = 0; (item = json[index]) != null; index++)
			{
				this.append(this.modelify(item));
			}
		};

		array_t.prototype.splice = function (index)
		{
			var child;

			scaffold.check(arguments.length === 1);
			scaffold.check.number(index);

			child = this.get(index);

			this.children.splice(index, 1);

			if (this.index(child) === null)
			{
				child.off('change', this.callback);
			}

			this.broadcast(new events.splice_t(child, this, index));
			this.broadcast(new events.change_t(child, this));
		};

		module.exports = array_t;
	})(exports(16), global, module(16), require(16));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var events = require('./events/events.js');
		var model_t = require('./model_t.js');

		var boolean_t = function boolean_t(value)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.boolean(value);

			model_t.call(this);

			this.value = null;

			this.set(value);
		};

		scaffold.types.extend(boolean_t, model_t);

		boolean_t.prototype.clone = function ()
		{
			scaffold.check(arguments.length === 0);

			return new boolean_t(this.value);
		};

		boolean_t.prototype.json = function ()
		{
			scaffold.check(arguments.length === 0);

			return this.value;
		};

		boolean_t.prototype.related = function (that)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(that, model_t);

			return that === this;
		};

		boolean_t.prototype.set = function (value)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.boolean(value);

			if (value !== this.value)
			{
				this.value = value;

				this.broadcast(new events.change_t(this, this));
			}
		};

		module.exports = boolean_t;
	})(exports(26), global, module(26), require(26));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var events = require('./events/events.js');
		var model_t = require('./model_t.js');

		var number_t = function number_t(value)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.number(value);

			model_t.call(this);

			this.value = null;

			this.set(value);
		};

		scaffold.types.extend(number_t, model_t);

		number_t.prototype.clone = function ()
		{
			scaffold.check(arguments.length === 0);

			return new number_t(this.value);
		};

		number_t.prototype.json = function ()
		{
			scaffold.check(arguments.length === 0);

			return this.value;
		};

		number_t.prototype.related = function (that)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(that, model_t);

			return that === this;
		};

		number_t.prototype.set = function (value)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.number(value);

			if (value !== this.value)
			{
				this.value = value;

				this.broadcast(new events.change_t(this, this));
			}
		};

		module.exports = number_t;
	})(exports(28), global, module(28), require(28));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var events = require('./events/events.js');
		var model_t = require('./model_t.js');

		var object_t = function object_t(json, modelify)
		{
			var callback;

			scaffold.check(arguments.length === 2);
			scaffold.check.object(json);
			scaffold.check.callable(modelify);

			model_t.call(this);

			callback = function (event)
			{
				this.broadcast(event);
			};

			callback = callback.bind(this);

			this.callback = callback;
			this.children = {};
			this.modelify = modelify;

			this.set(json);
		};

		scaffold.types.extend(object_t, model_t);

		object_t.prototype.animated = function (keys, callable)
		{
			var callback;
			var computed;
			var update;

			scaffold.check(arguments.length === 2);
			scaffold.check.string.array(keys);
			scaffold.check.callable(callable);

			computed = this.computed(keys, callable);

			callback = function ()
			{
				var index;
				var key;
				var values;

				values = [];

				for (index = 0; (key = keys[index]) != null; index++)
				{
					values.push(this.get(key).json());
				}

				return callable.apply(global, values);
			};

			callback = callback.bind(this);

			update = function ()
			{
				computed.set(callback());

				global.requestAnimationFrame(update);
			};

			update();

			return computed;
		};

		object_t.prototype.attach = function (key, child)
		{
			scaffold.check(arguments.length === 2);
			scaffold.check.string(key);
			scaffold.check.type(child, model_t);

			if (child.related(this))
			{
				throw new global.Error('The given child cannot be attached to this model because this model is related to the given child!');
			}

			if (key in this.children)
			{
				this.detach(key);
			}

			if (this.key(child) === null)
			{
				child.on('change', this.callback);
			}

			this.children[key] = child;

			this.broadcast(new events.attach_t(child, this, key));
			this.broadcast(new events.change_t(child, this));
		};

		object_t.prototype.clear = function ()
		{
			var key;

			scaffold.check(arguments.length === 0);

			for (key in this.children)
			{
				this.detach(key);
			}
		};

		object_t.prototype.clone = function ()
		{
			scaffold.check(arguments.length === 0);

			return new object_t(this.json(), this.modelify);
		};

		object_t.prototype.computed = function (keys, callable)
		{
			var callback;
			var change;
			var computed;
			var index;
			var key;

			scaffold.check(arguments.length === 2);
			scaffold.check.string.array(keys);
			scaffold.check.callable(callable);

			callback = function ()
			{
				var index;
				var key;
				var values;

				values = [];

				for (index = 0; (key = keys[index]) != null; index++)
				{
					values.push(this.get(key).json());
				}

				return callable.apply(global, values);
			};

			callback = callback.bind(this);

			computed = this.modelify(callback());

			change = function (event)
			{
				computed.set(callback());
			};

			for (index = 0; (key = keys[index]) != null; index++)
			{
				this.get(key).on('change', change);
			}

			return computed;
		};

		object_t.prototype.copy = function (keys)
		{
			var copied;
			var index;
			var key;

			scaffold.check(arguments.length === 1);
			scaffold.check.string.array(keys);

			copied = new object_t({}, this.modelify);

			for (index = 0; (key = keys[index]) != null; index++)
			{
				copied.attach(key, this.get(key).clone());
			}

			return copied;
		};

		object_t.prototype.detach = function (key)
		{
			var child;

			scaffold.check(arguments.length === 1);
			scaffold.check.string(key);

			child = this.get(key);

			delete this.children[key];

			if (this.key(child) === null)
			{
				child.off('change', this.callback);
			}

			this.broadcast(new events.detach_t(child, this, key));
			this.broadcast(new events.change_t(child, this));
		};

		object_t.prototype.get = function (key)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.string(key);

			if (!(key in this.children))
			{
				throw new global.Error('This model does not have a child with the key "' + key + '"!');
			}

			return this.children[key];
		};

		object_t.prototype.has = function (key)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.string(key);

			return key in this.children;
		};

		object_t.prototype.json = function ()
		{
			var json;
			var key;

			scaffold.check(arguments.length === 0);

			json = {};

			for (key in this.children)
			{
				json[key] = this.children[key].json();
			}

			return json;
		};

		object_t.prototype.key = function (that)
		{
			var key;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(that, model_t);

			for (key in this.children)
			{
				if (this.children[key] === that)
				{
					return key;
				}
			}

			return null;
		};

		object_t.prototype.link = function (keys)
		{
			var index;
			var key;
			var linked;

			scaffold.check(arguments.length === 1);
			scaffold.check.string.array(keys);

			linked = new object_t({}, this.modelify);

			for (index = 0; (key = keys[index]) != null; index++)
			{
				linked.attach(key, this.get(key));
			}

			return linked;
		};

		object_t.prototype.related = function (that)
		{
			var key;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(that, model_t);

			if (that === this)
			{
				return true;
			}

			for (key in this.children)
			{
				if (this.children[key].related(that))
				{
					return true;
				}
			}

			return false;
		};

		object_t.prototype.scope = function ()
		{
			var key;
			var scoped;

			scaffold.check(arguments.length === 0);

			scoped = new object_t({}, this.modelify);

			for (key in this.children)
			{
				scoped.attach(key, this.children[key]);
			}

			return scoped;
		};

		object_t.prototype.set = function (json)
		{
			var key;

			scaffold.check(arguments.length === 1);
			scaffold.check.object(json);

			this.clear();

			for (key in json)
			{
				this.attach(key, this.modelify(json[key]));
			}
		};

		module.exports = object_t;
	})(exports(29), global, module(29), require(29));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var events = require('./events/events.js');
		var model_t = require('./model_t.js');

		var string_t = function string_t(value)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.string(value);

			model_t.call(this);

			this.value = null;

			this.set(value);
		};

		scaffold.types.extend(string_t, model_t);

		string_t.prototype.clone = function ()
		{
			scaffold.check(arguments.length === 0);

			return new string_t(this.value);
		};

		string_t.prototype.json = function ()
		{
			scaffold.check(arguments.length === 0);

			return this.value;
		};

		string_t.prototype.related = function (that)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(that, model_t);

			return that === this;
		};

		string_t.prototype.set = function (value)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.string(value);

			if (value !== this.value)
			{
				this.value = value;

				this.broadcast(new events.change_t(this, this));
			}
		};

		module.exports = string_t;
	})(exports(30), global, module(30), require(30));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var array_t = require('./array_t.js');
		var boolean_t = require('./boolean_t.js');
		var number_t = require('./number_t.js');
		var object_t = require('./object_t.js');
		var string_t = require('./string_t.js');

		var modelify = function (json)
		{
			scaffold.check(arguments.length === 1);

			if (scaffold.is.array(json))
			{
				return new array_t(json, modelify);
			}

			if (scaffold.is.boolean(json))
			{
				return new boolean_t(json);
			}

			if (scaffold.is.number(json))
			{
				return new number_t(json);
			}

			if (scaffold.is.object(json))
			{
				return new object_t(json, modelify);
			}

			if (scaffold.is.string(json))
			{
				return new string_t(json);
			}

			throw new global.Error('Only plain json may be modelified!');
		};

		module.exports = modelify;
	})(exports(27), global, module(27), require(27));

	(function (exports, global, module, require)
	{
		exports.array_t = require('./array_t.js');
		exports.boolean_t = require('./boolean_t.js');
		exports.model_t = require('./model_t.js');
		exports.modelify = require('./modelify.js');
		exports.number_t = require('./number_t.js');
		exports.object_t = require('./object_t.js');
		exports.observee_t = require('./observee_t.js');
		exports.string_t = require('./string_t.js');
	})(exports(15), global, module(15), require(15));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var controller_t = function controller_t()
		{
			scaffold.check(arguments.length === 0);
		};

		scaffold.types.define(controller_t);

		module.exports = controller_t;
	})(exports(35), global, module(35), require(35));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var controller_t = require('./controller_t.js');
		var events = require('../../models/events/events.js');
		var models = require('../../models/models.js');

		var checkbox_t = function checkbox_t(observee, node)
		{
			var change;

			scaffold.check(arguments.length === 2);
			scaffold.check.type(observee, models.boolean_t);
			scaffold.check.type(node, global.Node);

			this.observee = observee;
			this.node = node;

			controller_t.call(this);

			change = function (event)
			{
				observee.set(node.checked);
			};

			node.addEventListener('change', change);

			observee.on('change', this.change.bind(this));

			this.change(new events.change_t(observee, observee));
		};

		scaffold.types.extend(checkbox_t, controller_t);

		checkbox_t.prototype.change = function (event)
		{
			var json;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(event, events.change_t);

			json = this.observee.json();

			if (json)
			{
				this.node.setAttribute('checked', '');
			}
			else
			{
				this.node.removeAttribute('checked');
			}

			this.node.checked = json;
		};

		module.exports = checkbox_t;
	})(exports(34), global, module(34), require(34));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var controller_t = require('./controller_t.js');
		var events = require('../../models/events/events.js');
		var models = require('../../models/models.js');

		var input_t = function input_t(observee, node)
		{
			var input;

			scaffold.check(arguments.length === 2);
			scaffold.check.type(observee, models.string_t);
			scaffold.check.type(node, global.Node);

			this.observee = observee;
			this.node = node;

			controller_t.call(this);

			input = function (event)
			{
				observee.set(node.value);
			};

			node.addEventListener('input', input);

			observee.on('change', this.change.bind(this));

			this.change(new events.change_t(observee, observee));
		};

		scaffold.types.extend(input_t, controller_t);

		input_t.prototype.change = function (event)
		{
			var json;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(event, events.change_t);

			json = this.observee.json();

			this.node.setAttribute('value', json);
			this.node.value = json;
		};

		module.exports = input_t;
	})(exports(36), global, module(36), require(36));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var controller_t = require('./controller_t.js');
		var events = require('../../models/events/events.js');
		var models = require('../../models/models.js');

		var select_t = function select_t(observee, node)
		{
			var change;

			scaffold.check(arguments.length === 2);
			scaffold.check.type(observee, models.string_t);
			scaffold.check.type(node, global.Node);

			this.observee = observee;
			this.node = node;

			controller_t.call(this);

			change = function (event)
			{
				observee.set(node.value);
			};

			node.addEventListener('change', change);

			observee.on('change', this.change.bind(this));

			this.change(new events.change_t(observee, observee));
		};

		scaffold.types.extend(select_t, controller_t);

		select_t.prototype.change = function (event)
		{
			var i;
			var json;
			var l;
			var option;
			var options;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(event, events.change_t);

			options = this.node.querySelectorAll('option');

			for (i = 0, l = options.length; i < l; i++)
			{
				options[i].removeAttribute('selected');
			}

			json = this.observee.json();
			option = this.node.querySelector('option[value="' + json + '"]');

			if (option != null)
			{
				option.setAttribute('selected', '');
			}

			this.node.value = json;
		};

		module.exports = select_t;
	})(exports(37), global, module(37), require(37));

	(function (exports, global, module, require)
	{
		exports.checkbox_t = require('./checkbox_t.js');
		exports.controller_t = require('./controller_t.js');
		exports.input_t = require('./input_t.js');
		exports.select_t = require('./select_t.js');
	})(exports(33), global, module(33), require(33));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var events = require('../../models/events/events.js');
		var models = require('../../models/models.js');

		var controller_t = function controller_t(scope, observee, string)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(scope, models.object_t);
			scaffold.check.type(observee, models.model_t);
			scaffold.check.string(string);

			this.scope = scope;
			this.string = string;

			observee.on('change', this.change.bind(this));

			this.change(new events.change_t(observee, scope));
		};

		scaffold.types.define(controller_t);

		controller_t.prototype.change = function (event)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(event, events.change_t);

			this.setter(this.prepare());
		};

		controller_t.prototype.prepare = function ()
		{
			var array;
			var json;
			var match;
			var name;
			var re;
			var string;

			scaffold.check(arguments.length === 0);

			re = new global.RegExp('{[\\s]*([\\S]+)[\\s]*}', 'gi');
			string = this.string;

			while ((array = re.exec(this.string)) !== null)
			{
				match = array[0];
				name = array[1];

				if (this.scope.has(name))
				{
					json = this.scope.get(name).json();
					string = string.replace(match, json);
				}
			}

			return string;
		};

		controller_t.prototype.setter = function (string)
		{
			throw new global.Error('Abstract!');
		};

		module.exports = controller_t;
	})(exports(40), global, module(40), require(40));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var controller_t = require('./controller_t.js');
		var models = require('../../models/models.js');

		var attribute_t = function attribute_t(scope, observee, node, name)
		{
			var string;

			scaffold.check(arguments.length === 4);
			scaffold.check.type(scope, models.object_t);
			scaffold.check.type(observee, models.model_t);
			scaffold.check.type(node, global.Node);
			scaffold.check.string(name);

			this.node = node;
			this.name = name;

			string = node.getAttribute(name);

			controller_t.call(this, scope, observee, string);
		};

		scaffold.types.extend(attribute_t, controller_t);

		attribute_t.prototype.setter = function (string)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.string(string);

			this.node.setAttribute(this.name, string);
		};

		module.exports = attribute_t;
	})(exports(39), global, module(39), require(39));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var controller_t = require('./controller_t.js');
		var models = require('../../models/models.js');

		var style_t = function style_t(scope, observee, string, node, key)
		{
			scaffold.check(arguments.length === 5);
			scaffold.check.type(scope, models.object_t);
			scaffold.check.type(observee, models.model_t);
			scaffold.check.string(string);
			scaffold.check.type(node, global.Node);
			scaffold.check.string(key);

			this.node = node;
			this.key = key;

			controller_t.call(this, scope, observee, string);
		};

		scaffold.types.extend(style_t, controller_t);

		style_t.prototype.setter = function (string)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.string(string);

			this.node.style.setProperty(this.key, string);
		};

		module.exports = style_t;
	})(exports(41), global, module(41), require(41));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var controller_t = require('./controller_t.js');
		var models = require('../../models/models.js');

		var text_t = function text_t(scope, observee, string, node)
		{
			scaffold.check(arguments.length === 4);
			scaffold.check.type(scope, models.object_t);
			scaffold.check.type(observee, models.model_t);
			scaffold.check.string(string);
			scaffold.check.type(node, global.Node);

			this.node = node;

			controller_t.call(this, scope, observee, string);
		};

		scaffold.types.extend(text_t, controller_t);

		text_t.prototype.setter = function (string)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.string(string);

			this.node.textContent = string;
		};

		module.exports = text_t;
	})(exports(42), global, module(42), require(42));

	(function (exports, global, module, require)
	{
		exports.attribute_t = require('./attribute_t.js');
		exports.controller_t = require('./controller_t.js');
		exports.style_t = require('./style_t.js');
		exports.text_t = require('./text_t.js');
	})(exports(38), global, module(38), require(38));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var controller_t = function controller_t()
		{
			scaffold.check(arguments.length === 0);
		};

		scaffold.types.define(controller_t);

		module.exports = controller_t;
	})(exports(45), global, module(45), require(45));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var controller_t = require('./controller_t.js');
		var events = require('../../models/events/events.js');
		var models = require('../../models/models.js');

		var array_t = function array_t(model, observee, node, process)
		{
			var i;
			var l;

			scaffold.check.type(model, models.model_t);
			scaffold.check.type(observee, models.array_t);
			scaffold.check.type(node, Node);
			scaffold.check.callable(process);

			controller_t.call(this);

			this.model = model;
			this.node = node;
			this.process = process;
			this.fragment = global.document.createDocumentFragment();
			this.nodes = [];

			while (node.firstChild != null)
			{
				this.fragment.appendChild(node.removeChild(node.firstChild));
			}

			observee.on('append', this.append.bind(this));
			observee.on('splice', this.splice.bind(this));

			for (i = 0, l = observee.length(); i < l; i++)
			{
				this.append(new events.append_t(observee.get(i), model, i));
			}
		};

		scaffold.types.extend(array_t, controller_t);

		array_t.prototype.append = function (event)
		{
			var before;
			var fragment;
			var i;
			var l;
			var nodes;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(event, events.append_t);

			fragment = global.document.importNode(this.fragment, true);
			nodes = [];

			for (i = 0, l = fragment.childNodes.length; i < l; i++)
			{
				this.process(fragment.childNodes[i], this.model, event.append);
				nodes.push(fragment.childNodes[i]);
			}

			if (this.nodes[event.index] != null)
			{
				before = this.nodes[event.index][0];
			}
			else
			{
				before = null;
			}

			this.node.insertBefore(fragment, before);
			this.nodes.splice(event.index, 0, nodes);
		};

		array_t.prototype.splice = function (event)
		{
			var i;
			var l;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(event, events.splice_t);

			for (i = 0, l = this.nodes[event.index].length; i < l; i++)
			{
				this.node.removeChild(this.nodes[event.index][i]);
			}

			this.nodes.splice(event.index, 1);
		};

		module.exports = array_t;
	})(exports(44), global, module(44), require(44));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var placeholder_t = function placeholder_t(node)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(node, global.Node);

			this.current = node;
			this.element = global.document.createElement('div');

			this.element.style.setProperty('display', 'none');

			this.hide();
		};

		scaffold.types.define(placeholder_t);

		placeholder_t.prototype.hide = function ()
		{
			scaffold.check(arguments.length === 0);

			if (this.current !== this.element)
			{
				this.current.parentNode.replaceChild(this.element, this.current);

				this.current = this.element;
			}
		};

		placeholder_t.prototype.show = function (node)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(node, global.Node);

			if (this.current !== node)
			{
				this.hide();

				this.element.parentNode.replaceChild(node, this.element);

				this.current = node;
			}
		};

		module.exports = placeholder_t;
	})(exports(47), global, module(47), require(47));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var controller_t = require('./controller_t.js');
		var events = require('../../models/events/events.js');
		var models = require('../../models/models.js');
		var placeholder_t = require('./placeholder_t.js');

		var object_t = function object_t(model, scope, node, traverse, key)
		{
			scaffold.check(arguments.length === 5);
			scaffold.check.type(model, models.model_t);
			scaffold.check.type(scope, models.model_t);
			scaffold.check.type(node, Node);
			scaffold.check.callable(traverse);
			scaffold.check.string(key);

			controller_t.call(this);

			this.model = model;
			this.scope = scope;
			this.node = node;
			this.traverse = traverse;
			this.placeholder = new placeholder_t(node);
			this.key = key;

			scope.on('attach', this.attach.bind(this));
			scope.on('detach', this.detach.bind(this));

			if (scope.has(key))
			{
				this.attach(new events.attach_t(scope.get(key), scope, key));
			}
		};

		scaffold.types.extend(object_t, controller_t);

		object_t.prototype.attach = function (event)
		{
			var node;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(event, events.attach_t);

			if (event.key === this.key)
			{
				node = global.document.importNode(this.node, true);

				this.placeholder.show(node);
				this.traverse(node, this.model, event.attach);
			}
		};

		object_t.prototype.detach = function (event)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(event, events.detach_t);

			if (event.key === this.key)
			{
				this.placeholder.hide();
			}
		};

		module.exports = object_t;
	})(exports(46), global, module(46), require(46));

	(function (exports, global, module, require)
	{
		exports.array_t = require('./array_t.js');
		exports.controller_t = require('./controller_t.js');
		exports.object_t = require('./object_t.js');
	})(exports(43), global, module(43), require(43));

	(function (exports, global, module, require)
	{
		exports.form = require('./form/controllers.js');
		exports.node = require('./node/controllers.js');
		exports.tree = require('./tree/controllers.js');
	})(exports(32), global, module(32), require(32));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var elements_t = function elements_t(nodes)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type.array(nodes, global.Node);

			this.nodes = nodes;
		};

		scaffold.types.define(elements_t);

		elements_t.prototype.add = function (name)
		{
			var i;
			var l;

			scaffold.check(arguments.length === 1);
			scaffold.check.string(name);

			for (i = 0, l = this.nodes.length; i < l; i++)
			{
				this.nodes[i].classList.add(name);
			}
		};

		elements_t.prototype.off = function (type, callback)
		{
			var i;
			var l;

			scaffold.check(arguments.length === 2);
			scaffold.check.string(type);
			scaffold.check.callable(callback);

			for (i = 0, l = this.nodes.length; i < l; i++)
			{
				this.nodes[i].removeEventListener(type, callback);
			}
		};

		elements_t.prototype.on = function (type, callback)
		{
			var i;
			var l;

			scaffold.check(arguments.length === 2);
			scaffold.check.string(type);
			scaffold.check.callable(callback);

			for (i = 0, l = this.nodes.length; i < l; i++)
			{
				this.nodes[i].addEventListener(type, callback);
			}
		};

		elements_t.prototype.remove = function (name)
		{
			var i;
			var l;

			scaffold.check(arguments.length === 1);
			scaffold.check.string(name);

			for (i = 0, l = this.nodes.length; i < l; i++)
			{
				this.nodes[i].classList.remove(name);
			}
		};

		module.exports = elements_t;
	})(exports(49), global, module(49), require(49));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var elements_t = require('./elements_t.js');

		var element_t = function element_t(node)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(node, global.Node);

			this.node = node;
		};

		scaffold.types.define(element_t);

		element_t.prototype.add = function (name)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.string(name);

			this.node.classList.add(name);
		};

		element_t.prototype.data = function (key)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.string(key);

			return this.node.dataset[key];
		};

		element_t.prototype.find = function (selector)
		{
			var array;
			var i;
			var l;
			var nodes;

			scaffold.check(arguments.length === 1);
			scaffold.check.string(selector);

			array = [];
			nodes = this.node.querySelectorAll(selector);

			for (i = 0, l = nodes.length; i < l; i++)
			{
				array[i] = nodes[i];
			}

			return new elements_t(array);
		};

		element_t.prototype.get = function ()
		{
			scaffold.check(arguments.length === 0);

			return this.node;
		};

		element_t.prototype.off = function (type, callback)
		{
			scaffold.check(arguments.length === 2);
			scaffold.check.string(type);
			scaffold.check.callable(callback);

			this.node.removeEventListener(type, callback);
		};

		element_t.prototype.on = function (type, callback)
		{
			scaffold.check(arguments.length === 2);
			scaffold.check.string(type);
			scaffold.check.callable(callback);

			this.node.addEventListener(type, callback);
		};

		element_t.prototype.remove = function (name)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.string(name);

			this.node.classList.remove(name);
		};

		element_t.prototype.root = function ()
		{
			scaffold.check(arguments.length === 0);

			return new element_t(document.body);
		};

		module.exports = element_t;
	})(exports(48), global, module(48), require(48));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var controllers = require('./controllers/controllers.js');
		var element_t = require('./element_t.js');
		var helpers = require('./helpers/helpers.js');
		var models = require('./models/models.js');

		var traverser_t = function traverser_t(logic)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.object(logic);

			this.logic = logic;
		};

		scaffold.types.define(traverser_t);

		traverser_t.prototype.traverse = function (node, model, scope)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(node, global.Node);
			scaffold.check.type(model, models.model_t);
			scaffold.check.type(scope, models.model_t);

			if (node.nodeType === global.Node.TEXT_NODE)
			{
				this.text(node, model, scope);
			}
			else if (node.nodeType === global.Node.ELEMENT_NODE)
			{
				this.element(node, model, scope);
			}
		};

		traverser_t.prototype.text = function (node, model, scope)
		{
			var i;
			var l;
			var name;
			var names;
			var observee;
			var string;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(node, global.Node);
			scaffold.check.type(model, models.model_t);
			scaffold.check.type(scope, models.model_t);

			string = node.textContent;
			names = helpers.names(string);

			for (i = 0, l = names.length; i < l; i++)
			{
				name = names[i];

				if (scope.has(name))
				{
					observee = scope.get(name);

					new controllers.node.text_t(scope, observee, string, node);
				}
			};
		};

		traverser_t.prototype.element = function (node, model, scope)
		{
			var name;
			var names;
			var observee;
			var type;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(node, global.Node);
			scaffold.check.type(model, models.model_t);
			scaffold.check.type(scope, models.model_t);

			if (node.hasAttribute('data-scope'))
			{
				name = helpers.consume(node, 'data-scope');

				new controllers.tree.object_t(model, scope, node, this.traverse.bind(this), name);
			}
			else
			{
				if (scaffold.is.type(scope, models.array_t))
				{
					new controllers.tree.array_t(model, scope, node, this.traverse.bind(this));
				}
				else
				{
					if (node.hasAttribute('data-logic'))
					{
						name = helpers.consume(node, 'data-logic');

						if (this.logic[name] == null)
						{
							throw new global.Error('There is no logic registered with the name "' + name + '"!');
						}

						this.logic[name].call(new element_t(node), model, scope);
					}

					name = node.nodeName.toLowerCase();
					type = node.getAttribute('type');

					if (name === 'input')
					{
						if (type === 'checkbox')
						{
							this.checkbox(node, model, scope);
						}
						else
						{
							this.input(node, model, scope);
						}
					}
					else if (name === 'select')
					{
						this.select(node, model, scope);
					}
					else if (name === 'img')
					{
						this.image(node, model, scope);
					}

					this.attributes(node, scope);
					this.children(node, model, scope);
				}
			}
		};

		traverser_t.prototype.children = function (node, model, scope)
		{
			var i;
			var l;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(node, global.Node);
			scaffold.check.type(model, models.model_t);
			scaffold.check.type(scope, models.model_t);

			for (i = 0, l = node.childNodes.length; i < l; i++)
			{
				this.traverse(node.childNodes[i], model, scope);
			}
		};

		traverser_t.prototype.checkbox = function (node, model, scope)
		{
			var name;
			var observee;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(node, global.Node);
			scaffold.check.type(model, models.model_t);
			scaffold.check.type(scope, models.model_t);

			if (node.hasAttribute('data-input'))
			{
				name = helpers.consume(node, 'data-input');
				observee = scope.get(name);

				new controllers.form.checkbox_t(observee, node);
			}
		};

		traverser_t.prototype.input = function (node, model, scope)
		{
			var name;
			var observee;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(node, global.Node);
			scaffold.check.type(model, models.model_t);
			scaffold.check.type(scope, models.model_t);

			if (node.hasAttribute('data-input'))
			{
				name = helpers.consume(node, 'data-input');
				observee = scope.get(name);

				new controllers.form.input_t(observee, node);
			}
		};

		traverser_t.prototype.select = function (node, model, scope)
		{
			var name;
			var observee;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(node, global.Node);
			scaffold.check.type(model, models.model_t);
			scaffold.check.type(scope, models.model_t);

			if (node.hasAttribute('data-input'))
			{
				name = helpers.consume(node, 'data-input');
				observee = scope.get(name);

				new controllers.form.select_t(observee, node);
			}
		};

		traverser_t.prototype.image = function (node, model, scope)
		{
			var name;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(node, global.Node);
			scaffold.check.type(model, models.model_t);
			scaffold.check.type(scope, models.model_t);

			if (node.hasAttribute('data-image'))
			{
				name = helpers.consume(node, 'data-image');

				node.setAttribute('src', '{' + name + '}');
			}
		};

		traverser_t.prototype.attributes = function (node, scope)
		{
			var attribute;
			var i;
			var l;

			scaffold.check(arguments.length === 2);
			scaffold.check.type(node, global.Node);
			scaffold.check.type(scope, models.object_t);

			for (i = 0, l = node.attributes.length; i < l; i++)
			{
				attribute = node.attributes[i];

				if (attribute.name !== 'style')
				{
					this.attribute(node, scope, attribute.name);
				}
				else
				{
					this.style(node, scope);
				}
			}
		};

		traverser_t.prototype.attribute = function (node, scope, attribute_name)
		{
			var i;
			var l;
			var name;
			var names;
			var observee;
			var value;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(node, global.Node);
			scaffold.check.type(scope, models.object_t);
			scaffold.check.string(attribute_name);

			value = node.getAttribute(attribute_name);
			names = helpers.names(value);

			for (i = 0, l = names.length; i < l; i++)
			{
				name = names[i];

				if (scope.has(name))
				{
					observee = scope.get(name);

					new controllers.node.attribute_t(scope, observee, node, attribute_name);
				}
			}
		};

		traverser_t.prototype.style = function (node, scope)
		{
			var array;
			var i;
			var key;
			var l;
			var name;
			var names;
			var observee;
			var re;
			var string;
			var value;

			scaffold.check(arguments.length === 2);
			scaffold.check.type(node, global.Node);
			scaffold.check.type(scope, models.object_t);

			re = new global.RegExp('[\\s]*([\\S]+)[\\s]*:[\\s]*([^;]+)[\\s]*', 'gi');
			string = node.getAttribute('style');

			while ((array = re.exec(string)) !== null)
			{
				key = array[1];
				value = array[2];
				names = helpers.names(value);

				for (i = 0, l = names.length; i < l; i++)
				{
					name = names[i];

					if (scope.has(name))
					{
						observee = scope.get(name);

						new controllers.node.style_t(scope, observee, value, node, key);
					}
				}
			}
		};

		module.exports = traverser_t;
	})(exports(31), global, module(31), require(31));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var helpers = require('./helpers/helpers.js');
		var models = require('./models/models.js');
		var traverser_t = require('./traverser_t.js');

		var views_t = function views_t()
		{
			scaffold.check(arguments.length === 0);

			this.activated = false;
			this.callbacks = {};
		};

		scaffold.types.define(views_t);

		views_t.prototype.activate = function (json)
		{
			var base;
			var callback;
			var node;

			scaffold.check(arguments.length === 1);
			scaffold.check.object(json);

			if (this.activated)
			{
				throw new global.Error('The document has already been activated!');
			}

			this.activated = true;

			callback = function ()
			{
				var model;
				var traverser;

				model = models.modelify(json);
				traverser = new traverser_t(this.callbacks);

				traverser.traverse(global.document.body, model, model);
			};

			callback = callback.bind(this);

			helpers.delay(callback);
		};

		views_t.prototype.register = function (name, callback)
		{
			scaffold.check(arguments.length === 2);
			scaffold.check.string(name);
			scaffold.check.callable(callback);

			if (this.activated)
			{
				throw new global.Error('Logic must be registered prior to activation!');
			}

			if (this.callbacks[name] != null)
			{
				throw new global.Error('Logic has already been registered for the name "' + name + '"!');
			}

			this.callbacks[name] = callback;
		};

		module.exports = views_t;
	})(exports(3), global, module(3), require(3));

	(function (exports, global, module, require)
	{
		var views_t = require('./views_t.js');

		module.exports = new views_t();
	})(exports(2), global, module(2), require(2));

	(function (exports, global, module, require)
	{
		module.exports = JSON.parse('{"w":0,"h":0,"k":320,"real":{"lower":-1,"upper":1,"value":0},"imaginary":{"lower":-1,"upper":1,"value":-0.85},"exponent":{"lower":2,"upper":10,"step":1,"value":6},"iterations":{"lower":1,"upper":128,"step":1,"value":32},"hq":{"value":false},"colors":[{"r":95,"g":143,"b":169},{"r":255,"g":255,"b":255}]}');
	})(exports(50), global, module(50), require(50));

	(function (exports, global, module, require)
	{
		var logic = function (model, scope)
		{
			this.on('click', function ()
			{
				model.get('colors').append(model.modelify({ 'r' : 127, 'g' : 127, 'b' : 127 }));
			});
		};

		module.exports = logic;
	})(exports(51), global, module(51), require(51));

	(function (exports, global, module, require)
	{
		var clamp = function (lower, value, upper)
		{
			return global.Math.max(lower, global.Math.min(value, upper));
		};

		module.exports = clamp;
	})(exports(53), global, module(53), require(53));

	(function (exports, global, module, require)
	{
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
	})(exports(52), global, module(52), require(52));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var attribute_t = function attribute_t(context, info, locator)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(info, global.WebGLActiveInfo);
			scaffold.check.number(locator);

			this.context = context;
			this.info = info;
			this.locator = locator;
		};

		scaffold.types.define(attribute_t);

		module.exports = attribute_t;
	})(exports(57), global, module(57), require(57));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var attribute_t = require('./attribute_t.js');

		var factory = function (context, program)
		{
			var attribute;
			var i;
			var info;
			var limit;
			var wrapper;

			scaffold.check(arguments.length === 2);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(program, global.WebGLProgram);

			limit = context.getProgramParameter(program, context.ACTIVE_ATTRIBUTES);
			wrapper = {};

			for (i = 0; i < limit; i++)
			{
				info = context.getActiveAttrib(program, i);
				attribute = select(context, program, info);

				// TODO: Define property on wrapper?

				wrapper[info.name] = attribute;
			}

			return wrapper;
		};

		var select = function (context, program, info)
		{
			var locator;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(program, global.WebGLProgram);
			scaffold.check.type(info, global.WebGLActiveInfo);

			locator = context.getAttribLocation(program, info.name);

			switch (info.type)
			{
				default:
				{
					return new attribute_t(context, info, locator);
				}
			}
		};

		module.exports = factory;
	})(exports(58), global, module(58), require(58));

	(function (exports, global, module, require)
	{
		exports.attribute_t = require('./attribute_t.js');
		exports.factory = require('./factory.js');
	})(exports(56), global, module(56), require(56));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var buffer_t = function buffer_t(context)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(context, global.WebGLRenderingContext);

			this.buffer = context.createBuffer();
			this.context = context;
		};

		scaffold.types.define(buffer_t);

		buffer_t.prototype.delete = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.buffer !== null);

			this.context.deleteBuffer(this.buffer);

			this.buffer = null;
		};

		buffer_t.prototype.draw = function ()
		{
			throw new global.Error('Abstract!');
		};

		buffer_t.prototype.transfer = function ()
		{
			throw new global.Error('Abstract!');
		};

		module.exports = buffer_t;
	})(exports(61), global, module(61), require(61));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var attributes = require('../attributes/attributes.js');
		var buffer_t = require('./buffer_t.js');

		var array_t = function array_t(context, data)
		{
			scaffold.check(arguments.length === 2);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.number.array(data);

			buffer_t.call(this, context);

			this.data = new global.Float32Array(data);
		};

		scaffold.types.extend(array_t, buffer_t);

		array_t.prototype.bind = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.buffer !== null);

			this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer);
		};

		array_t.prototype.draw = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.buffer !== null);

			this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer);
			this.context.drawArrays(this.context.TRIANGLES, 0, this.data.length);
		};

		array_t.prototype.link = function (attribute)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(attribute, attributes.attribute_t);
			scaffold.check(this.buffer !== null);

			this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer);
			this.context.enableVertexAttribArray(attribute.locator);
			this.context.vertexAttribPointer(attribute.locator, 3, this.context.FLOAT, false, 0, 0);
		};

		array_t.prototype.transfer = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.buffer !== null);

			this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer);
			this.context.bufferData(this.context.ARRAY_BUFFER, this.data, this.context.STATIC_DRAW);
		};

		module.exports = array_t;
	})(exports(60), global, module(60), require(60));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var buffer_t = require('./buffer_t.js');

		var element_t = function element_t(context, data)
		{
			scaffold.check(arguments.length === 2);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.number.array(data);

			buffer_t.call(this, context);

			this.data = new global.Uint16Array(data);
		};

		scaffold.types.extend(element_t, buffer_t);

		element_t.prototype.bind = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.buffer !== null);

			this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER, this.buffer);
		};

		element_t.prototype.draw = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.buffer !== null);

			this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER, this.buffer);
			this.context.drawElements(this.context.TRIANGLES, this.data.length, this.context.UNSIGNED_SHORT, 0);
		};

		element_t.prototype.transfer = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.buffer !== null);

			this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER, this.buffer);
			this.context.bufferData(this.context.ELEMENT_ARRAY_BUFFER, this.data, this.context.STATIC_DRAW);
		};

		module.exports = element_t;
	})(exports(62), global, module(62), require(62));

	(function (exports, global, module, require)
	{
		exports.array_t = require('./array_t.js');
		exports.buffer_t = require('./buffer_t.js');
		exports.element_t = require('./element_t.js');
	})(exports(59), global, module(59), require(59));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var context = function (canvas)
		{
			var result;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(canvas, global.HTMLCanvasElement);

			result = canvas.getContext('webgl');

			if (result !== null)
			{
				return result;
			}

			result = canvas.getContext('experimental-webgl');

			if (result !== null)
			{
				return result;
			}

			throw new global.Error('Could not find a WebGL context!');
		};

		module.exports = context;
	})(exports(64), global, module(64), require(64));

	(function (exports, global, module, require)
	{
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
	})(exports(65), global, module(65), require(65));

	(function (exports, global, module, require)
	{
		exports.context = require('./context.js');
		exports.coordinates = require('./coordinates.js');
	})(exports(63), global, module(63), require(63));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var listenable_t = function listenable_t(onget, onset, value)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.callable(onget);
			scaffold.check.callable(onset);

			this.onget = onget;
			this.onset = onset;
			this.value = null;

			this.set(value);
		};

		scaffold.types.define(listenable_t);

		listenable_t.prototype.attach = function (wrapper, name)
		{
			var property;

			scaffold.check(arguments.length === 2);
			scaffold.check.object(wrapper);
			scaffold.check.string(name);

			property = {};

			property.get = this.get.bind(this);
			property.set = this.set.bind(this);

			global.Object.defineProperty(wrapper, name, property);
		};

		listenable_t.prototype.get = function ()
		{
			scaffold.check(arguments.length === 0);

			this.onget(this.value);

			return this.value;
		};

		listenable_t.prototype.set = function (value)
		{
			scaffold.check(arguments.length === 1);

			this.value = this.onset(this.value, value);
		};

		module.exports = listenable_t;
	})(exports(67), global, module(67), require(67));

	(function (exports, global, module, require)
	{
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
	})(exports(70), global, module(70), require(70));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var matrix_t = require('./matrix_t.js');

		var identity_t = function identity_t()
		{
			scaffold.check(arguments.length === 0);

			matrix_t.call(this, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
		};

		scaffold.types.extend(identity_t, matrix_t);

		module.exports = identity_t;
	})(exports(69), global, module(69), require(69));

	(function (exports, global, module, require)
	{
		exports.identity_t = require('./identity_t.js');
		exports.matrix_t = require('./matrix_t.js');
	})(exports(68), global, module(68), require(68));

	(function (exports, global, module, require)
	{
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
	})(exports(71), global, module(71), require(71));

	(function (exports, global, module, require)
	{
		exports.listenable_t = require('./listenable_t.js');
		exports.matrices = require('./matrices/matrices.js');
		exports.transform_t = require('./transform_t.js');
	})(exports(66), global, module(66), require(66));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var shader_t = function shader_t(context, source, type)
		{
			var message;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.string(source);
			scaffold.check.number(type);

			this.context = context;
			this.shader = context.createShader(type);

			context.shaderSource(this.shader, source);
			context.compileShader(this.shader);

			if (!context.getShaderParameter(this.shader, context.COMPILE_STATUS))
			{
				message = context.getShaderInfoLog(this.shader);

				context.deleteShader(this.shader);

				throw new global.Error(message);
			}
		};

		scaffold.types.define(shader_t);

		shader_t.prototype.attach = function (program)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(program, global.WebGLProgram);
			scaffold.check(this.shader !== null);

			this.context.attachShader(program, this.shader);
		};

		shader_t.prototype.delete = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.shader !== null);

			this.context.deleteShader(this.shader);

			this.shader = null;
		};

		module.exports = shader_t;
	})(exports(74), global, module(74), require(74));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var shader_t = require('./shader_t.js');

		var fragment_t = function fragment_t(context, source)
		{
			scaffold.check(arguments.length === 2);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.string(source);

			shader_t.call(this, context, source, context.FRAGMENT_SHADER);
		};

		scaffold.types.extend(fragment_t, shader_t);

		module.exports = fragment_t;
	})(exports(73), global, module(73), require(73));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var shader_t = require('./shader_t.js');

		var vertex_t = function vertex_t(context, source)
		{
			scaffold.check(arguments.length === 2);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.string(source);

			shader_t.call(this, context, source, context.VERTEX_SHADER);
		};

		scaffold.types.extend(vertex_t, shader_t);

		module.exports = vertex_t;
	})(exports(75), global, module(75), require(75));

	(function (exports, global, module, require)
	{
		exports.fragment_t = require('./fragment_t.js');
		exports.shader_t = require('./shader_t.js');
		exports.vertex_t = require('./vertex_t.js');
	})(exports(72), global, module(72), require(72));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var attributes = require('../attributes/attributes.js');
		var buffers = require('../buffers/buffers.js');

		var shape_t = function shape_t(context, indices, vectors)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.number.array(indices);
			scaffold.check.number.array(vectors);

			if (indices.length % 3 !== 0)
			{
				throw new global.Error('Only triangle layouts are supported at this point!');
			}

			if (vectors.length % 3 !== 0)
			{
				throw new global.Error('Only three-dimensional shapes are supported at this point!');
			}

			this.context = context;
			this.indices = new buffers.element_t(context, indices);
			this.vectors = new buffers.array_t(context, vectors);
		};

		scaffold.types.define(shape_t);

		shape_t.prototype.draw = function (attribute)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(attribute, attributes.attribute_t);

			this.indices.transfer();
			this.vectors.transfer();

			this.vectors.link(attribute);
			this.indices.draw();
		};

		module.exports = shape_t;
	})(exports(78), global, module(78), require(78));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var shape_t = require('./shape_t.js');

		var quad_t = function quad_t(context)
		{
			var indices;
			var vectors;

			scaffold.check(arguments.length === 1);
			scaffold.check.type(context, global.WebGLRenderingContext);

			indices =
			[
				0, 1, 2,
				0, 2, 3
			];

			vectors =
			[
				 1.0,  1.0, 0.0,
				-1.0,  1.0, 0.0,
				-1.0, -1.0, 0.0,
				 1.0, -1.0, 0.0
			];

			shape_t.call(this, context, indices, vectors);
		};

		scaffold.types.extend(quad_t, shape_t);

		module.exports = quad_t;
	})(exports(77), global, module(77), require(77));

	(function (exports, global, module, require)
	{
		exports.quad_t = require('./quad_t.js');
		exports.shape_t = require('./shape_t.js');
	})(exports(76), global, module(76), require(76));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var texture_t = function texture_t(context)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.type(context, global.WebGLRenderingContext);

			this.context = context;
			this.texture = context.createTexture();

			this.context.bindTexture(this.context.TEXTURE_2D, this.texture);

		    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_MAG_FILTER, this.context.LINEAR);
		    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_MIN_FILTER, this.context.LINEAR);
		    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_WRAP_S, this.context.CLAMP_TO_EDGE);
		    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_WRAP_T, this.context.CLAMP_TO_EDGE);
		};

		scaffold.types.define(texture_t);

		texture_t.prototype.bind = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.texture !== null);

			this.context.bindTexture(this.context.TEXTURE_2D, this.texture);
		};

		texture_t.prototype.delete = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.texture !== null);

			this.context.deleteTexture(this.texture);

			this.texture = null;
		};

		texture_t.prototype.transfer = function (data, w, h)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.number.array(data);
			scaffold.check.number(w);
			scaffold.check.number(h);
			scaffold.check(this.texture !== null);

			if (data.length !== w*h*4)
			{
				throw new global.Error('The wrong number of pixels were supplied!');
			}

			this.context.bindTexture(this.context.TEXTURE_2D, this.texture);
			this.context.texImage2D(this.context.TEXTURE_2D, 0, this.context.RGBA, w, h, 0, this.context.RGBA, this.context.UNSIGNED_BYTE, new global.Uint8Array(data));
		};

		module.exports = texture_t;
	})(exports(80), global, module(80), require(80));

	(function (exports, global, module, require)
	{
		exports.texture_t = require('./texture_t.js');
	})(exports(79), global, module(79), require(79));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');

		var uniform_t = function uniform_t(context, info, locator)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(info, global.WebGLActiveInfo);
			scaffold.check.type(locator, global.WebGLUniformLocation);

			this.context = context;
			this.current = null;
			this.info = info;
			this.locator = locator;
		};

		scaffold.types.define(uniform_t);

		uniform_t.prototype.get = function ()
		{
			scaffold.check(arguments.length === 0);

			return this.current;
		};

		uniform_t.prototype.set = function (value)
		{
			throw new global.Error('Abstract!');
		};

		module.exports = uniform_t;
	})(exports(83), global, module(83), require(83));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var uniform_t = require('./uniform_t.js');

		var bool_t = function bool_t(context, info, locator)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(info, global.WebGLActiveInfo);
			scaffold.check.type(locator, global.WebGLUniformLocation);

			uniform_t.call(this, context, info, locator);
		};

		scaffold.types.extend(bool_t, uniform_t);

		bool_t.prototype.set = function (value)
		{
			scaffold.check(arguments.length === 1);

			if (this.info.size === 1)
			{
				scaffold.check.boolean(value);

				this.context.uniform1i(this.locator, value);

				this.current = value;
			}
			else
			{
				scaffold.check.boolean.array(value);

				if (value.length !== this.info.size)
				{
					throw new global.Error('The uniform "' + this.info.name + '" needs ' + this.info.size + ' elements but ' + value.length + ' were supplied!');
				}

				this.context.uniform1iv(this.locator, value);

				this.current = value;
			}
		}

		module.exports = bool_t;
	})(exports(82), global, module(82), require(82));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var uniform_t = require('./uniform_t.js');

		var float_t = function float_t(context, info, locator)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(info, global.WebGLActiveInfo);
			scaffold.check.type(locator, global.WebGLUniformLocation);

			uniform_t.call(this, context, info, locator);
		};

		scaffold.types.extend(float_t, uniform_t);

		float_t.prototype.set = function (value)
		{
			scaffold.check(arguments.length === 1);

			if (this.info.size === 1)
			{
				scaffold.check.number(value);

				this.context.uniform1f(this.locator, value);

				this.current = value;
			}
			else
			{
				scaffold.check.number.array(value);

				if (value.length !== this.info.size)
				{
					throw new global.Error('The uniform "' + this.info.name + '" needs ' + this.info.size + ' elements but ' + value.length + ' were supplied!');
				}

				this.context.uniform1fv(this.locator, value);

				this.current = value;
			}
		}

		module.exports = float_t;
	})(exports(85), global, module(85), require(85));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var uniform_t = require('./uniform_t.js');

		var float_mat3_t = function float_mat3_t(context, info, locator)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(info, global.WebGLActiveInfo);
			scaffold.check.type(locator, global.WebGLUniformLocation);

			uniform_t.call(this, context, info, locator);
		};

		scaffold.types.extend(float_mat3_t, uniform_t);

		float_mat3_t.prototype.set = function (value)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.number.array(value);

			if (value.length !== this.info.size*9)
			{
				throw new global.Error('The uniform "' + this.info.name + '" needs ' + this.info.size*9 + ' elements but ' + value.length + ' were supplied!');
			}

			this.context.uniformMatrix3fv(this.locator, false, value);

			this.current = value;
		}

		module.exports = float_mat3_t;
	})(exports(86), global, module(86), require(86));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var uniform_t = require('./uniform_t.js');

		var float_vec3_t = function float_vec3_t(context, info, locator)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(info, global.WebGLActiveInfo);
			scaffold.check.type(locator, global.WebGLUniformLocation);

			uniform_t.call(this, context, info, locator);
		};

		scaffold.types.extend(float_vec3_t, uniform_t);

		float_vec3_t.prototype.set = function (value)
		{
			scaffold.check(arguments.length === 1);
			scaffold.check.number.array(value);

			if (value.length !== this.info.size*3)
			{
				throw new global.Error('The uniform "' + this.info.name + '" needs ' + this.info.size*3 + ' elements but ' + value.length + ' were supplied!');
			}

			this.context.uniform3fv(this.locator, false, value);

			this.current = value;
		}

		module.exports = float_vec3_t;
	})(exports(87), global, module(87), require(87));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var uniform_t = require('./uniform_t.js');

		var sampler_2d_t = function sampler_2d_t(context, info, locator)
		{
			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(info, global.WebGLActiveInfo);
			scaffold.check.type(locator, global.WebGLUniformLocation);

			uniform_t.call(this, context, info, locator);
		};

		scaffold.types.extend(sampler_2d_t, uniform_t);

		sampler_2d_t.prototype.set = function (value)
		{
			scaffold.check(arguments.length === 1);

			if (this.info.size === 1)
			{
				scaffold.check.number(value);

				this.context.uniform1i(this.locator, value);

				this.current = value;
			}
			else
			{
				scaffold.check.number.array(value);

				if (value.length !== this.info.size)
				{
					throw new global.Error('The uniform "' + this.info.name + '" needs ' + this.info.size + ' elements but ' + value.length + ' were supplied!');
				}

				this.context.uniform1iv(this.locator, value);

				this.current = value;
			}
		}

		module.exports = sampler_2d_t;
	})(exports(88), global, module(88), require(88));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var bool_t = require('./bool_t.js');
		var float_t = require('./float_t.js');
		var float_mat3_t = require('./float_mat3_t.js');
		var float_vec3_t = require('./float_vec3_t.js');
		var sampler_2d_t = require('./sampler_2d_t.js');

		var factory = function (context, program)
		{
			var i;
			var info;
			var limit;
			var property;
			var uniform;
			var wrapper;

			scaffold.check(arguments.length === 2);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(program, global.WebGLProgram);

			limit = context.getProgramParameter(program, context.ACTIVE_UNIFORMS);
			wrapper = {};

			for (i = 0; i < limit; i++)
			{
				info = context.getActiveUniform(program, i);
				uniform = select(context, program, info);

				property = {};

				property.get = uniform.get.bind(uniform);
				property.set = uniform.set.bind(uniform);

				global.Object.defineProperty(wrapper, info.name, property);
			}

			return wrapper;
		};

		var select = function (context, program, info)
		{
			var locator;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(program, global.WebGLProgram);
			scaffold.check.type(info, global.WebGLActiveInfo);

			locator = context.getUniformLocation(program, info.name);

			switch (info.type)
			{
				case context.BOOL:
				{
					return new bool_t(context, info, locator);
				}
				case context.FLOAT:
				{
					return new float_t(context, info, locator);
				}
				case context.FLOAT_MAT3:
				{
					return new float_mat3_t(context, info, locator);
				}
				case context.FLOAT_VEC3:
				{
					return new float_vec3_t(context, info, locator);
				}
				case context.SAMPLER_2D:
				{
					return new sampler_2d_t(context, info, locator);
				}
				case context.BOOL_VEC2:
				case context.BOOL_VEC3:
				case context.BOOL_VEC4:
				case context.FLOAT_MAT2:
				case context.FLOAT_MAT4:
				case context.FLOAT_VEC2:
				case context.FLOAT_VEC4:
				case context.INT:
				case context.INT_VEC2:
				case context.INT_VEC3:
				case context.INT_VEC4:
				case context.SAMPLER_CUBE:
				default:
				{
					throw new global.Error('Unimplemented!');
				}
			}
		};

		module.exports = factory;
	})(exports(84), global, module(84), require(84));

	(function (exports, global, module, require)
	{
		exports.bool_t = require('./bool_t.js');
		exports.factory = require('./factory.js');
		exports.float_t = require('./float_t.js');
		exports.float_mat3_t = require('./float_mat3_t.js');
		exports.float_vec3_t = require('./float_vec3_t.js');
		exports.sampler_2d_t = require('./sampler_2d_t.js');
		exports.uniform_t = require('./uniform_t.js');
	})(exports(81), global, module(81), require(81));

	(function (exports, global, module, require)
	{
		var scaffold = require('<scaffold>');
		var attributes = require('./attributes/attributes.js');
		var shaders = require('./shaders/shaders.js');
		var uniforms = require('./uniforms/uniforms.js');

		var program_t = function program_t(context, fs, vs)
		{
			var message;

			scaffold.check(arguments.length === 3);
			scaffold.check.type(context, global.WebGLRenderingContext);
			scaffold.check.type(fs, shaders.fragment_t);
			scaffold.check.type(vs, shaders.vertex_t);

			this.context = context;
			this.program = context.createProgram();

			fs.attach(this.program);
			vs.attach(this.program);

			context.linkProgram(this.program);

			if (!context.getProgramParameter(this.program, context.LINK_STATUS))
			{
				message = context.getProgramInfoLog(this.program);

				context.deleteProgram(this.program);

				throw new global.Error(message);
			}

			this.attributes = attributes.factory(context, this.program);
			this.uniforms = uniforms.factory(context, this.program);
		};

		scaffold.types.define(program_t);

		program_t.prototype.delete = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.program !== null);

			this.context.deleteProgram(this.program);

			this.program = null;
		};

		program_t.prototype.use = function ()
		{
			scaffold.check(arguments.length === 0);
			scaffold.check(this.program !== null);

			this.context.useProgram(this.program);
		};

		module.exports = program_t;
	})(exports(89), global, module(89), require(89));

	(function (exports, global, module, require)
	{
		exports.attributes = require('./attributes/attributes.js');
		exports.buffers = require('./buffers/buffers.js');
		exports.helpers = require('./helpers/helpers.js');
		exports.math = require('./math/math.js');
		exports.shaders = require('./shaders/shaders.js');
		exports.shapes = require('./shapes/shapes.js');
		exports.textures = require('./textures/textures.js');
		exports.uniforms = require('./uniforms/uniforms.js');
		exports.program_t = require('./program_t.js');
	})(exports(55), global, module(55), require(55));

	(function (exports, global, module, require)
	{
		module.exports = unescape('precision%20highp%20float%3B%0D%0A%0D%0Auniform%20sampler2D%20colorMap%3B%0D%0Auniform%20float%20limit%3B%0D%0Auniform%20float%20power%3B%0D%0Auniform%20float%20C%3B%0D%0Auniform%20float%20D%3B%0D%0Auniform%20bool%20antiAlias%3B%0D%0Avarying%20vec2%20sampleOffset%3B%0D%0Avarying%20vec2%20textureCoordinates%3B%0D%0A%0D%0Avec4%20sample%28vec2%20vector%29%0D%0A%7B%0D%0A%09float%20x%20%3D%20vector.x%3B%0D%0A%09float%20y%20%3D%20vector.y%3B%0D%0A%0D%0A%09int%20n%20%3D%20int%28limit%29%3B%0D%0A%0D%0A%09for%20%28int%20i%20%3D%200%3B%20i%20%3C%20256%3B%20i++%29%0D%0A%09%7B%0D%0A%09%09float%20squared%20%3D%20x*x%20+%20y*y%3B%0D%0A%0D%0A%09%09if%20%28squared%20%3E%204.0%20%7C%7C%20i%20%3E%20n%29%0D%0A%09%09%7B%0D%0A%09%09%09n%20%3D%20i%3B%0D%0A%0D%0A%09%09%09break%3B%0D%0A%09%09%7D%0D%0A%0D%0A%09%09float%20radius%20%3D%20pow%28squared%2C%20power*0.5%29%3B%0D%0A%09%09float%20angle%20%3D%20power*atan%28y%2C%20x%29%3B%0D%0A%0D%0A%09%09x%20%3D%20radius*cos%28angle%29%20+%20C%3B%0D%0A%09%09y%20%3D%20radius*sin%28angle%29%20+%20D%3B%0D%0A%09%7D%0D%0A%0D%0A%09float%20factor%20%3D%20float%28n%29/float%28int%28limit%29%29%3B%0D%0A%0D%0A%09return%20texture2D%28colorMap%2C%20vec2%28factor%2C%200.0%29%29%3B%0D%0A%7D%0D%0A%0D%0Avoid%20main%28%29%0D%0A%7B%0D%0A%09if%20%28true%20%26%26%20antiAlias%29%0D%0A%09%7B%0D%0A%09%09vec4%20a%20%3D%20sample%28textureCoordinates%20+%20sampleOffset*vec2%28-0.5%2C%20-0.5%29%29%3B%0D%0A%09%09vec4%20b%20%3D%20sample%28textureCoordinates%20+%20sampleOffset*vec2%28-0.5%2C%20%200.5%29%29%3B%0D%0A%09%09vec4%20c%20%3D%20sample%28textureCoordinates%20+%20sampleOffset*vec2%28%200.5%2C%20-0.5%29%29%3B%0D%0A%09%09vec4%20d%20%3D%20sample%28textureCoordinates%20+%20sampleOffset*vec2%28%200.5%2C%20%200.5%29%29%3B%0D%0A%09%09vec4%20e%20%3D%20sample%28textureCoordinates%20+%20sampleOffset*vec2%28%200.0%2C%20%200.0%29%29%3B%0D%0A%0D%0A%09%09gl_FragColor%20%3D%20%28a%20+%20b%20+%20c%20+%20d%20+%20e%29*0.2%3B%0D%0A%09%7D%0D%0A%09else%0D%0A%09%7B%0D%0A%09%09gl_FragColor%20%3D%20sample%28textureCoordinates%29%3B%0D%0A%09%7D%0D%0A%7D%0D%0A');
	})(exports(92), global, module(92), require(92));

	(function (exports, global, module, require)
	{
		module.exports = unescape('precision%20highp%20float%3B%0D%0A%0D%0Auniform%20mat3%20textureMatrix%3B%0D%0Auniform%20float%20viewportHeight%3B%0D%0Auniform%20float%20viewportWidth%3B%0D%0Aattribute%20vec3%20vertexPosition%3B%0D%0Avarying%20vec2%20sampleOffset%3B%0D%0Avarying%20vec2%20textureCoordinates%3B%0D%0A%0D%0Avoid%20main%28%29%0D%0A%7B%0D%0A%09sampleOffset.x%20%3D%20%28textureMatrix%5B0%5D%5B0%5D%20+%20textureMatrix%5B1%5D%5B0%5D%29/viewportWidth%3B%0D%0A%09sampleOffset.y%20%3D%20%28textureMatrix%5B0%5D%5B1%5D%20+%20textureMatrix%5B1%5D%5B1%5D%29/viewportHeight%3B%0D%0A%09textureCoordinates%20%3D%20%28textureMatrix*vec3%28vertexPosition.xy%2C%201.0%29%29.xy%3B%0D%0A%09gl_Position%20%3D%20vec4%28vertexPosition%2C%201.0%29%3B%0D%0A%7D%0D%0A');
	})(exports(93), global, module(93), require(93));

	(function (exports, global, module, require)
	{
		exports.fs = require('./fs.glsl');
		exports.vs = require('./vs.glsl');
	})(exports(91), global, module(91), require(91));

	(function (exports, global, module, require)
	{
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
	})(exports(90), global, module(90), require(90));

	(function (exports, global, module, require)
	{
		var webgl = require('../webgl/index.js');
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
	})(exports(54), global, module(54), require(54));

	(function (exports, global, module, require)
	{
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
	})(exports(94), global, module(94), require(94));

	(function (exports, global, module, require)
	{
		var option = function (model, scope)
		{
			var change;
			var mouseup;

			change = function ()
			{
				var value;

				value = scope.get('value').json();

				if (value === true)
				{
					this.remove('option-off');
					this.add('option-on');
				}

				if (value === false)
				{
					this.remove('option-on');
					this.add('option-off');
				}
			};

			change = change.bind(this);

			scope.get('value').on('change', change);

			mouseup = function (event)
			{
				var value;

				value = scope.get('value').json();

				if (value === true)
				{
					scope.get('value').set(false);
				}

				if (value === false)
				{
					scope.get('value').set(true);
				}
			};

			mouseup = mouseup.bind(this);

			this.on('mouseup', mouseup);
		};

		module.exports = option;
	})(exports(95), global, module(95), require(95));

	(function (exports, global, module, require)
	{
		var clamp = require('./clamp.js');

		var logic = function (model, scope)
		{
			var left;
			var update;
			var mousedown;
			var mousemove;
			var mouseup;

			left = function (lower, upper, value)
			{
				return (clamp(lower, value, upper) - lower)/(upper - lower)*100.0;
			};

			scope.attach('left', scope.computed(['lower', 'upper', 'value'], left));

			update = function (event)
			{
				var rect;
				var lower;
				var upper;
				var value;
				var step;

				rect = this.get().getBoundingClientRect();

				lower = scope.get('lower').json();
				upper = scope.get('upper').json();

				value = (event.clientX - rect.left)/rect.width*(upper - lower) + lower;
				value = clamp(lower, value, upper);

				if (scope.has('step'))
				{
					step = scope.get('step').json();

					value = global.Math.round(value/step)*step;
				}

				scope.get('value').set(value);
			};

			update = update.bind(this);

			mousedown = function (event)
			{
				this.root().on('mouseleave', mouseup);
				this.root().on('mousemove', mousemove);
				this.root().on('mouseup', mouseup);

				update(event);
			};

			mousedown = mousedown.bind(this);

			mousemove = function (event)
			{
				update(event);
			};

			mousemove = mousemove.bind(this);

			mouseup = function (event)
			{
				this.root().off('mouseleave', mouseup);
				this.root().off('mousemove', mousemove);
				this.root().off('mouseup', mouseup);
			};

			mouseup = mouseup.bind(this);

			this.on('mousedown', mousedown);
		};

		module.exports = logic;
	})(exports(96), global, module(96), require(96));

	(function (exports, global, module, require)
	{
		var views = require('<views>');
		var model = require('./model.json');

		views.register('add', require('./logic/add.js'));
		views.register('app', require('./logic/app.js'));
		views.register('canvas', require('./logic/canvas.js'));
		views.register('color', require('./logic/color.js'));
		views.register('option', require('./logic/option.js'));
		views.register('slider', require('./logic/slider.js'));

		views.activate(model);
	})(exports(1), global, module(1), require(1));
})(null, typeof global !== 'undefined' ? global : window, typeof module !== 'undefined' ? module : { 'exports' : {} }, null);
