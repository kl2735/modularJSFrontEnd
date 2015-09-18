var events = require("./pubsub");

var stat = (function () {
	var peopleCount = 0;

	var $stat = $('#statModule');
	var template = $('#stat-template').html();

	events.on('peopleChanged', setCount);

	function render(){
		console.log(peopleCount);
		var data = {
			stat: peopleCount
		};
		$stat.html(Mustache.render(template, data));
	}

	function setCount(num){
		peopleCount = num;
		render();
	}

	render();

	return {
		setCount: setCount
	};
})();

module.exports = stat;