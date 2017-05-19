var React = require('react'),
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
					<TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

module.exports = TodoList;