var views = require('<views>');
var model = require('./model.json');

views.register('add', require('./logic/add.js'));
views.register('app', require('./logic/app.js'));
views.register('canvas', require('./logic/canvas.js'));
views.register('color', require('./logic/color.js'));
views.register('option', require('./logic/option.js'));
views.register('slider', require('./logic/slider.js'));

views.activate(model);
