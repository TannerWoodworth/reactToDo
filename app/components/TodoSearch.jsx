var React = require('react');

var TodoSearch = React.createClass({
	handleSearch: function() {
		var showCompleted = this.refs.showCompleted.checked,
				searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	},

	render: function() {
		return (
			<div className="container--search">
				<div>
					<input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
				</div>
					<label>
						<input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
						Show Completed Todos
					</label>
				<div>
				</div>
			</div>
		)
	}
});

module.exports = TodoSearch;