var expect = require('expect'),
		actions = require('actions');

describe('Actions', () => {
	it('should generate searchText action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Search Text'
		};
		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});

	it('should generate addTodo action', () => {
		var action = {
			type: 'ADD_TODO',
			text: 'Task to do'
		};
		var res = actions.addTodo(action.text);

		expect(res).toEqual(action);
	});

	it('should generate addTodos action object', () => {
		var todos = [{id: 111, text: 'task1', completed: false, completedAt: undefined, createdAt: 33000}];
		var action = {
			type: 'ADD_TODOS',
			todos
		};
		var res = actions.addTodos(todos);

		expect(res).toEqual(action);
	});

	it('should toggle show completed action', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED',
		};
		var res = actions.toggleShowCompleted();

		expect(res).toEqual(action);
	});

	it('should toggle todo action', () => {
		var action = {
			type: 'TOGGLE_TODO',
			id: 1
		};
		var res = actions.toggleTodo(action.id);

		expect(res).toEqual(action);
	});
});