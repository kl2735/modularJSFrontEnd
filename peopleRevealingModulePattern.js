var $ = require('jquery');
var events = require('./pubsub');

var people = ( function() {

		var people = ["will", "ke", "leo"];
		var getDom = function () {
			this.$el = $('#peopleModule');
			this.$button = this.$el.find('button');
			this.$input = this.$el.find('input');
			this.$ul = this.$el.find('ul');
			this.template = this.$el.find('#people-template').html();
		};

		var init = function (){
			getDom();
			bindEvents();
			_render();

		};

		var bindEvents = function () {
			this.$button.on('click', addPerson.bind(this));
			this.$ul.delegate('i.del', 'click', deletePerson.bind(this));
		};

		var addPerson = function(value) {
			people.push( (typeof value === "string")? value : this.$input.val());
			_render();
			this.$input.val('');
		};

		var deletePerson = function (e) {
			var $remove = $(e.target).closest('li');
			var i = this.$ul.find('li').index($remove);
			people.splice(i, 1);
			_render();

		};


		var _render = function (){
			var data = {
				people: people
			};

			this.$ul.html(Mustache.render(this.template, data));
			events.emit('peopleChanged', people.length);
		};

		init();

		return {
			addPerson: addPerson,
			deletePerson: deletePerson
		};

})();

module.exports = people;
