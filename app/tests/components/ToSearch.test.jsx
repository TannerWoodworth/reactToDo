var React = require('react'),
		ReactDOM = require('react-dom'),
		expect = require('expect'),
		$ = require('jQuery'),
		TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should call onSearch with entered input text', () => {
		var searchText = 'Test',
				spy = expect.createSpy(),
				todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(false, 'Test');
	});

	it('should call onSearch with proper checked value', () => {
		var spy = expect.createSpy(),
				todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(true, '');
	});
});