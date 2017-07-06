import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {fbRef} from 'app/firebase/';

var expect = require('expect'),
		actions = require('actions'),
		createMockStore = configureMockStore([thunk]);

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
			todo: {
				id: 'asdf123',
				text: 'Test task text',
				completed: false,
				createdAt: 0
			}
		};
		var res = actions.addTodo(action.todo);

		expect(res).toEqual(action);
	});

	it('should create todo and dispatch ADD_TODO', (done) => {
		const store = createMockStore({});
		const todoText = 'Testing Todo Item';

		store.dispatch(actions.startAddTodo(todoText)).then(() => {
			const actions = store.getActions();
			expect(actions[0]).toInclude({
				type: 'ADD_TODO'
			});
			expect(actions[0].todo).toInclude({
				text: todoText
			});
			done();
		}).catch(done);
	});

	it('should generate addTodos action object', () => {
		var todos = [{id: '111', text: 'task1', completed: false, completedAt: undefined, createdAt: 33000}];
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

	it('should generate update todo action', () => {
		var action = {
			type: 'UPDATE_TODO',
			id: 1,
			updates: {completed: false}
		};
		var res = actions.updateTodo(action.id, action.updates);

		expect(res).toEqual(action);
	});
	describe('Tests with Firebase todos', () => {
		var testTodoRef;

		beforeEach((done) => {
			var todosRef = fbRef.child('todos');

			todosRef.remove().then(() => {
				testTodoRef = fbRef.child('todos').push();

				return testTodoRef.set({
					text: 'Task to do',
					completed: false,
					createdAt: 1123
				})

			})
			.then(() => done())
			.catch(done);
		});

		afterEach((done) => {
			testTodoRef.remove().then(() => done());
		});

		it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
			const store = createMockStore({});
			const action = actions.startToggleTodo(testTodoRef.key, true);

			store.dispatch(action).then(() => {
				const mockActions = store.getActions();

				expect(mockActions[0]).toInclude({
					type: 'UPDATE_TODO',
					id: testTodoRef.key,
				});
				expect(mockActions[0].updates).toInclude({
					completed: true
				});
				expect(mockActions[0].updates.completedAt).toExist();

				done();
			}, done);
		});

		it('should populate todos and dispatch ADD_TODOS', (done) => {
			const store = createMockStore({});
			const action = actions.startAddTodos();

			store.dispatch(action).then(() => {
				const mockActions = store.getActions();

				expect(mockActions[0].type).toEqual('ADD_TODOS');
				expect(mockActions[0].todos.length).toEqual(1);
				expect(mockActions[0].todos[0].text).toEqual('Task to do'); 

				done();
			}, done)
		});
	});
});
