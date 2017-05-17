var React = require('react');

var TodoItem = React.createClass({

	render: function() {
		var {text, completed, id} = this.props;

		return (
			<div onClick={() => { this.props.onToggle(id); }}>
				<input type="checkbox" checked={completed} />
				{text}
			</div>
		)
	}
});

module.exports = TodoItem;