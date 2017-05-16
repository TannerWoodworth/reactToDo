var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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

	handleAddTodo: function(text) {
		alert('new todo: ' + text);
	},

	render: function() {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
});

module.exports = TodoApp;