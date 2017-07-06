var React = require('react'),
	ReactDOM = require('react-dom'),
	{Provider} = require('react-redux'),
	{hashHistory} = require('react-router');

var actions = require('actions'),
		store = require('configureStore').configure();

import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		hashHistory.push('/todos');
	} else {
		hashHistory.push('/');
	}
})


store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
  document.getElementById('app')
);
