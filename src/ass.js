'use strict';

/**
 * Convert SRT subtitles to a 3d compatible
 * Advanced SubStation Alpha (ASS) format
 */
var moment = require('moment');
var fs = require('fs');
var util = require('util');
var path = require('path');
var mustache = require('mustache');
var _ = require('lodash');

var ASS = (function (m, fs, util, path, mustache)
{
	var ass = {
		template: {
			'format': {
				'time': 'H:mm:ss.SS'
			},
			'events': 'Dialogue: {{{layer}}},{{{time.start}}},{{{time.end}}},{{{style}}},{{{name}}},{{{margin.right}}},{{{margin.left}}},{{{margin.vertical}}},{{{effect}}},{{{text}}}'
		},
		regex: {
			time: /(\d+)\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/g
		}
	};

	var config = fs.readFileSync(path.resolve(__dirname, 'ass.json'), 'UTF-8');
	var defaults = JSON.parse(config);

	var _structured = [], _rendered = '';

	ass.parse = function (_in, _out, _options)
	{
		_.merge(defaults, _options);

		this._raw = fs.readFileSync(_in);

		_structured['info'] = defaults.info;
		_structured['style'] = defaults.style;
		_structured['events'] = this.buildEventData();

		_rendered = this.render();

		fs.writeFile(_out, _rendered);
	};

	ass.render = function()
	{
		var template = fs.readFileSync(path.resolve(__dirname, 'templates/ass.mustache'), 'UTF-8');

		return mustache.render(template, _structured);
	};

	ass.buildEventData = function()
	{
		var self = this;

		var data = this._raw.toString().replace(/\r/g, '');
		var regex = this.regex.time;
		data = data.split(regex);
		data.shift();

		var items = [];
		for (var i = 0; i < data.length; i += 4)
		{
			var start = moment.duration(data[i + 1].trim().replace(',', '.')).valueOf();
			var end = moment.duration(data[i + 2].trim().replace(',', '.')).valueOf();

			var event_temp = JSON.parse(JSON.stringify(defaults.event));

			var event = util._extend(event_temp, {
				time: {
					start: moment.utc(start).format(self.template.format.time),
					end: moment.utc(end).format(self.template.format.time)
				},
				text: data[i + 3].trim().replace(/\n/g, '\\n\\N')
			});

			items.push(event);
		}

		return items;
	};

	return ass;

})(moment, fs, util, path, mustache);

module.exports = ASS;
