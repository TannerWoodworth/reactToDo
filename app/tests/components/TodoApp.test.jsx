var React = require('react'),
		ReactDOM = require('react-dom'),
		{Provider} = require('react-redux'),
		expect = require('expect'),
		$ = require('jQuery'),
		TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore'),
		TodoApp = require('TodoApp');
import TodoList from 'TodoList';

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should render TodoList', () => {
		var store = configureStore.configure(),
				provider = TestUtils.renderIntoDocument(
					<Provider store={store}>
						<TodoApp/>
					</Provider>
				);

		var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0],
				todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

		expect(todoList.length).toEqual(1);
	});

});