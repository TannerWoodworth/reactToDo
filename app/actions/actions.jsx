import moment from 'moment';
import firebase, {fbRef} from 'app/firebase/index';

export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

export var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	};
};

export var startAddTodo = (text) => {
	return (dispatch, getState) => {
		var todo = {
			completed: false,
			text,
			createdAt: moment().unix(),
			completedAt: null
		};
		var todoRef = fbRef.child('todos').push(todo);

		return todoRef.then(() => {
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}));
		});
	};
};

export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	};
};

export var startAddTodos = () => {
	return (dispatch, getState) => {
		var todosRef = fbRef.child('todos');

		return todosRef.once('value').then((snapshot) => {
			var todos = snapshot.val() || {},
					parsedTodos = [];

			Object.keys(todos).forEach((todoId) => {
				parsedTodos.push({
					id: todoId,
					...todos[todoId]
				});
			});

			dispatch(addTodos(parsedTodos));
		});
	};
};

export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED',
	};
};

export var updateTodo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id,
		updates
	};
};

export var startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		var todoRef = fbRef.child(`todos/${id}`),
				updates = {
					completed,
					completedAt: completed ? moment().unix() : null
				};
		return todoRef.update(updates).then(() => {
			dispatch(updateTodo(id, updates));
		});
	};
};
