var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('tasks');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			var todos = [{id: 5, complete: false, text: 'Test API'}];
			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('tasks'));
			expect(actualTodos).toEqual(todos);
		});

		it('should NOT set invalid todos array', () => {
			var badTodos = {a: 'b'};
			TodoAPI.setTodos(badTodos);
			expect(localStorage.getItem('tasks')).toBe(null);
		});
	});

	describe('getTodos', () => {
		it('should return empty array for bad localStorage data', () => {
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});

		it('should return todos if valid array is in localStorage', () => {
			var todos = [{id: 5, complete: false, text: 'Test API'}];
			localStorage.setItem('tasks', JSON.stringify(todos));

			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual(todos);
		});
	});

	describe('filterTodos', () => {
		var todos = [{id: 1, completed: true, text: 'test task'}, {id: 2, completed: true, text: 'another test task'}, {id: 3, completed: false, text: 'final test task'}];

		it('should return all items if showCompleted is true', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});

		it('should return items if showCompleted is false', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		});

		it('should sort by completed status', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(false);
		});

		it('should filter todos by searchText', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'final');
			expect(filteredTodos.length).toBe(1);
		});

		it('should return all todos if searchText is empty', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});

	});
});
