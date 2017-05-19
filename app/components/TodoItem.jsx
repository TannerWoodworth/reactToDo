var React = require('react'),
		moment = require('moment');

var TodoItem = React.createClass({

	render: function() {
		var {text, completed, id, createdAt, completedAt} = this.props,
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
			<div className={todoClassName} onClick={() => { this.props.onToggle(id); }}>
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

module.exports = TodoItem;