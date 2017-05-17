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
});