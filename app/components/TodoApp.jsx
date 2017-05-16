var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
getInitialState: function() {
	return {
		todos: [
			{
				id: 1,
				text: 'Make Todo app'
			}, {
				id: 2,
				text: 'Style Todo app'
			}, {
				id: 3,
				text: 'Task 3'
			}, {
				id: 4,
				text: 'Task 4'
			}
		]
	};
},

	render: function() {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		)
	}
});

module.exports = TodoApp;