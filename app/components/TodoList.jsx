var React = require('react'),
		{connect} = require('react-redux'),
		TodoAPI = require('TodoAPI');
import TodoItem from 'TodoItem';

export var TodoList = React.createClass({
	render: function() {
		var {todos, showCompleted, searchText} = this.props,
				renderTodos = () => {
					var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
					
					if (filteredTodos.length === 0) {
						return (<p className="finished-message">Nothing to do. Woo! 🎉</p>)
					} 

					return filteredTodos.map((todo) => {
						return (
							<TodoItem key={todo.id} {...todo}/>
						);
					});
				};

				return (
					<div className="todo-list">
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