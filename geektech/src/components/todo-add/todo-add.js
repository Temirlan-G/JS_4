import React from 'react';
import './todo-add.css';

class TodoAdd extends React.Component {
  state = {
    label: ''
  }

  onValueChange = (text) => {
    this.setState({
      label: text.toLowerCase()
    })
  }

  onAddNewTodo = (event) => {
    event.preventDefault();
    this.props.addNewTodo(this.state.label)
    this.state.label = ''
  }


  render() {
    console.log(this.state.label)

    return (
      <div>
        <form className="form-control todo-add-input" onSubmit={this.onAddNewTodo}>
          <input className="todo-add-input"
            onChange={(event) => this.onValueChange(event.target.value)}
            value={this.state.label}
            type='text'
            placeholder='Feel the todo'
          />
          <input type='submit' value='Add'
                 className="btn btn-outline-success btn-sm float-right"
          />
        </form>
      </div>
    )
  }
}

export default TodoAdd;
