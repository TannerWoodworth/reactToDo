var React = require('react'),
		ReactDOM = require('react-dom'),
		expect = require('expect'),
		$ = require('jQuery'),
		TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {TodoItem} from 'TodoItem';

describe('TodoItem', () => {
	it('should exist', () => {
		expect(TodoItem).toExist();
	});

	it('should dispatch TOGGLE_TODO action on click', () => {
		var todoData = {id: 110, completed: true, text: 'Write TodoItem.test.jsx test'},
				action = actions.startToggleTodo(todoData.id, !todoData.completed),
				spy = expect.createSpy(),
				todo = TestUtils.renderIntoDocument(<TodoItem {...todoData} dispatch={spy}/>),
				$el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});
});