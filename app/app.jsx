var React = require('react'),
	ReactDOM = require('react-dom'),
	{Provider} = require('react-redux'),
	{Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions'),
		store = require('configureStore').configure(),
		TodoAPI = require('TodoAPI');

import Login from 'Login';
import TodoApp from 'TodoApp';

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/">
				<Route path="todos" component={TodoApp}/>
				<IndexRoute component={Login}/>
			</Route>
		</Router>
	</Provider>,
  document.getElementById('app')
);
