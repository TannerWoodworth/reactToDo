var $ = require('jquery');

module.exports = {
	setTodos: function(todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('tasks', JSON.stringify(todos));
			return todos;
		}
	},

	getTodos: function() {
		var stringTodos = localStorage.getItem('tasks'),
				todos = [];

		try{
			todos = JSON.parse(stringTodos);
		} catch (e) {
			console.error(e);
		}

		if ($.isArray(todos)) {
			return todos;
		} else {
			return [];
		}
	}
};