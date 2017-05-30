var React = require('react'),
		ReactDOM = require('react-dom'),
		expect = require('expect'),
		$ = require('jQuery'),
		TestUtils = require('react-addons-test-utils');

// var TodoSearch = require('TodoSearch');
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should dispatch SET_SEARCH_TEXT on input change', () => {
		var searchText = 'Test',
		action = {type: 'SET_SEARCH_TEXT', searchText},
				spy = expect.createSpy(),
				todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox is checked', () => {
		var action = {type: 'TOGGLE_SHOW_COMPLETED'},
				spy = expect.createSpy(),
				todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(action);
	});
});