var React = require('react'),
		{connect} = require('react-redux'),
		actions = require('actions');

export var TodoSearch = React.createClass({
	render: function() {
		var {dispatch, showCompleted, searchText} = this.props;

		return (
			<div className="container--search">
				<div>
					<input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
						var searchText = this.refs.searchText.value;
						dispatch(actions.setSearchText(searchText));
					}}/>
				</div>
					<label>
						<input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
							dispatch(actions.toggleShowCompleted());
						}}/>
						Show Completed Todos
					</label>
				<div>
				</div>
			</div>
		)
	}
});

export default connect(
	(state) => {
		return {
			showCompleted: state.showCompleted,
			searchText: state.searchText
		}
	}
)(TodoSearch);