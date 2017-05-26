var redux = require('redux'),
		{searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (initalState = {}) => {
	var reducer = redux.combineReducers ({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer,
	});

	var store = redux.createStore(reducer, initalState, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
};