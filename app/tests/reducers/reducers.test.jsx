var expect = require('expect'),
		reducers = require('reducers'),
		df = require('deep-freeze-strict');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'text'
			};
			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED',
			};
			var res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				todo: {
					id: 'acb123',
					text: 'test text',
					completed: false,
					createdAt: 978643
				}
			};
			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);
		});

		it('should update todo', () => {
			var todos = [{
				id: 123,
				text: 'some text',
				completed: true,
				createdAt: 123,
				completedAt: 125
			}];
			var updates = {
				completed: false,
				completedAt: null
			};
			var action = {
				type: 'UPDATE_TODO',
				id: todos[0].id,
				updates
			};
			var res = reducers.todosReducer(df(todos), df(action));

			expect(res[0].completed).toEqual(updates.completed);
			expect(res[0].completedAt).toEqual(updates.completedAt);
			expect(res[0].text).toEqual(todos[0].text);
		});

		it('should add exisiting todos', () => {
			var todos = [{id: 111, text: 'task1', completed: false, completedAt: undefined, createdAt: 33000}];
			var action = {
				type: 'ADD_TODOS',
				todos
			};
			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);
		});

		it('should wipe todos on logout', () => {
			var todos = [{id: 111, text: 'task1', completed: false, completedAt: undefined, createdAt: 33000}];
			var action = {
				type: 'LOGOUT'
			};
			var res = reducers.todosReducer(df(todos), df(action));

			expect(res.length).toEqual(0);
		});
	});

	describe('authReducer', () => {
		it('should store uid on LOGIN', () => {
			const action = {
				type: 'LOGIN',
				uid: 'asdf1234'
			};
			const res = reducers.authReducer(undefined, df(action));

			expect(res).toEqual({
				uid: action.uid
			});
		});

		it('should wipe auth on LOGOUT', () => {
			const authData = {
				uid: 'asdf1234'
			};
			const action = {
				type: 'LOGOUT'
			};
			const res = reducers.authReducer(df(authData), df(action));

			expect(res).toEqual({});
		});
	});
});