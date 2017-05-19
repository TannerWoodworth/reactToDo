var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var task = this.refs.task.value;

    if (task.length > 0) {
      this.refs.task.value = '';
      this.props.onAddTodo(task);
    } else {
      this.refs.task.focus();
    }
  },
  render: function () {
    return (
      <div className="container--add-todo">
        <form ref="form" onSubmit={this.handleSubmit} className="task-form">
          <input type="text" ref="task" placeholder="Ex. 'Walk Dog'"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
