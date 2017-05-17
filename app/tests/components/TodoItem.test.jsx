var React = require('react'),
		ReactDOM = require('react-dom'),
		expect = require('expect'),
		$ = require('jQuery'),
		TestUtils = require('react-addons-test-utils');

var TodoItem = require('TodoItem');

describe('TodoItem', () => {
	it('should exist', () => {
		expect(TodoItem).toExist();
	});

	it('should call onToggle prop with id on click', () => {
		var todoData = {id: 110, completed: true, text: 'Write TodoItem.test.jsx test'},
				spy = expect.createSpy(),
				todo = TestUtils.renderIntoDocument(<TodoItem {...todoData} onToggle={spy}/>),
				$el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(110);
	});
});