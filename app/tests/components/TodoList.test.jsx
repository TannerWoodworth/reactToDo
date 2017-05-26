var React = require('react'),
		ReactDOM = require('react-dom'),
		{Provider} = require('react-redux'),
		TestUtils = require('react-addons-test-utils'),
		expect = require('expect'),
		$ = require('jquery');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodoItem, {TodoItem} from 'TodoItem';

describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo component for eac todo item', () => {
		var todos = [{
			id: 1,
			text: 'Do something',
			completed: false,
			completedAt: undefined,
			createdAt: 500
		},{
			id: 2,
			text: 'Add redux stuff',
			completed: false,
			completedAt: undefined,
			createdAt: 500
		}];
		var store = configure({
			todos
		});
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList/>
			</Provider>
		);

		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodoItem);

		expect(todosComponents.length).toBe(todos.length);
	});

	it('should render empty message if no todos', () => {
		var todos = [],
				todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>),	
				$el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.finished-message').length).toBe(1);
	});
});