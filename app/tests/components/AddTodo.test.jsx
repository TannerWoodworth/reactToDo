var React = require('react'),
		ReactDOM = require('react-dom'),
		expect = require('expect'),
		$ = require('jQuery'),
		TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should dispatch ADD_TODO when valid todo text', () => {
		var spy = expect.createSpy(),
				task = 'Test Task',
				action = actions.startAddTodo(task),
				addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>),
				$el = $(ReactDOM.findDOMNode(addTodo));

				addTodo.refs.task.value = task;
				TestUtils.Simulate.submit($el.find('form')[0]);

				expect(spy).toHaveBeenCalledWith(action);
	});

	it('should NOT dispatch ADD_TODO w/ invalid data', () => {
		var spy = expect.createSpy(),
				addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>),
				$el = $(ReactDOM.findDOMNode(addTodo)),
				task = '';

				addTodo.refs.task.value = task;
				TestUtils.Simulate.submit($el.find('form')[0]);

				expect(spy).toNotHaveBeenCalled();
	});
});