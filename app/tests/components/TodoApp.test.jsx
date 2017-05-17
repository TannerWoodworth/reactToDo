var React = require('react'),
		ReactDOM = require('react-dom'),
		expect = require('expect'),
		$ = require('jQuery'),
		TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should add task to todos state on handleAddTodo', () => {
		var todoText = 'Test text',
				todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos:[]});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});

	it('should toggle completed value when handleToggle is called', () => {
		var todoData = {id: 11, completed: false, text: 'Test fatures'},
				todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: [todoData]});
		expect(todoApp.state.todos[0].completed).toBe(false);
		
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
	});

});