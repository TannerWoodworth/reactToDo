var React = require('react'),
		{connect} = require('react-redux'),
		moment = require('moment'),
		actions = require('actions');

export var TodoItem = React.createClass({

	render: function() {
		var {text, completed, id, createdAt, completedAt, dispatch} = this.props,
				todoClassName = completed ? 'todo -completed' : 'todo',
				renderDate = () => {
					var message = 'Created ',
							timestamp = createdAt;

					if (completed) {
						message = 'Completed '
						timestamp = completedAt
					}

					return message + moment.unix(timestamp).format('MMM Do YYYY h:mm a');
				};

		return (
			<div className={todoClassName} onClick={() => { 
				// this.props.onToggle(id); 
				dispatch(actions.startToggleTodo(id, !completed));
				}}>
				<div>
					<input type="checkbox" checked={completed} />
				</div>
				<div>
					<p>{text}</p>
					<p className="todo -subtext">{renderDate()}</p>
				</div>
			</div>
		)
	}
});

export default connect()(TodoItem);