var React = require('react'),
		ReactDOM = require('react-dom'),
		expect = require('expect'),
		$ = require('jQuery'),
		TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should call onAddTodo prop w/ valid data', () => {
		var spy = expect.createSpy(),
				addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>),
				$el = $(ReactDOM.findDOMNode(addTodo)),
				task = 'Run Test';

				addTodo.refs.task.value = task;
				TestUtils.Simulate.submit($el.find('form')[0]);

				expect(spy).toHaveBeenCalledWith(task);
	});

	it('should NOT call onAddTodo prop w/ invalid data', () => {
		var spy = expect.createSpy(),
				addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>),
				$el = $(ReactDOM.findDOMNode(addTodo)),
				task = '';

				addTodo.refs.task.value = task;
				TestUtils.Simulate.submit($el.find('form')[0]);

				expect(spy).toNotHaveBeenCalled();
	});
});