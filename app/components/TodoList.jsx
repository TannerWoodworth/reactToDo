var React = require('react'),
		{connect} = require('react-redux'),
		TodoItem = require('TodoItem');

var TodoList = React.createClass({
	render: function() {
		var {todos} = this.props,
				renderTodos = () => {

			if (todos.length === 0) {
				return (<p className="finished-message">Nothing to do. Woo! 🎉</p>)
			} 

			return todos.map((todo) => {
				return (
					<TodoItem key={todo.id} {...todo}/>
				);
			});
		};

		return (
			<div>
				{renderTodos()}
			</div>
		)
	}
});

module.exports = connect(
	(state) => {
		return {
			todos: state.todos
		};
	}
)(TodoList);