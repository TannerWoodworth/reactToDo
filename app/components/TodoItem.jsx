var React = require('react'),
		moment = require('moment');

var TodoItem = React.createClass({

	render: function() {
		var {text, completed, id, createdAt, completedAt} = this.props,
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
			<div onClick={() => { this.props.onToggle(id); }}>
				<input type="checkbox" checked={completed} />
				<p>{text}</p>
				<p>{renderDate()}</p>
			</div>
		)
	}
});

module.exports = TodoItem;