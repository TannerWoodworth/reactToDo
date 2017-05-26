var React = require('react'),
		uuid = require('node-uuid'),
		moment = require('moment');

import TodoList from 'TodoList'
var AddTodo = require('AddTodo'),
		TodoSearch = require('TodoSearch'),
		TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		};
	},

	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
	},

	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					completed: false,
					text: text,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		})
	},

	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},

	render: function() {
		var {todos, showCompleted, searchText} = this.state,
				filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<h1 className="page-title">reactTodo</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
								<TodoSearch onSearch={this.handleSearch}/>
								<TodoList/>
								<AddTodo onAddTodo={this.handleAddTodo}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = TodoApp;