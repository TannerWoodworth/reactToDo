var React = require('react'),
		{connect} = require('react-redux'),
		TodoAPI = require('TodoAPI');
import TodoItem from 'TodoItem';

export var TodoList = React.createClass({
	render: function() {
		var {todos, showCompleted, searchText} = this.props,
				renderTodos = () => {

			if (todos.length === 0) {
				return (<p className="finished-message">Nothing to do. Woo! 🎉</p>)
			} 

			return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
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

export default connect(
	(state) => {
		return state;
	}
)(TodoList);