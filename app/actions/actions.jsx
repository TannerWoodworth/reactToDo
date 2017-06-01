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

export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED',
	};
};

export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};