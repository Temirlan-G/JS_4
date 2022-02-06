import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

class App extends React.Component {
    state = {
        todos: [
            {label: 'Drink Coffee', important: false, done: true, id: 1},
            {label: 'Make Awesome App', important: true, done: false, id: 2},
            {label: 'Have a lunch', important: false, done: false, id: 3}
        ],
        status: 'all'
    }

    onDelete = (id) => {
        this.setState((oldState) => {
            const idx = oldState.todos.findIndex((todo) => todo.id === id)

            const prev = oldState.todos.slice(0, idx);
            const next = oldState.todos.slice(idx + 1);

            const result = [...prev, ...next];

            return {todos: result}
        })
    }

    onToggleImportant = (id) => {
        this.setState((oldState) => {
            const idx = oldState.todos.findIndex((todo) => todo.id === id)

            const prev = oldState.todos.slice(0, idx);
            const old_todo = oldState.todos[idx]
            const new_todo = {...old_todo, important: !old_todo.important}
            const next = oldState.todos.slice(idx + 1);

            const result = [...prev, new_todo, ...next];

            return {todos: result}
        })
    }

    onStatusChange = (statusText) => {
        this.setState({
            status: statusText
        })
    }

    onFilterByStatus = (todos, status) => {
        if(status === 'active') {
            return todos.filter((todo) => todo.done === false)
        } else if (status === 'done') {
            return todos.filter((todo) => todo.done === true)
        } else {
            return todos
        }
    }

onlyDone = (todos) => {
        return todos.filter((todo) => todo.done === true)
}

    onToggleDone = (id) => {
        this.setState((oldState) => {
            const idx = oldState.todos.findIndex((todo) => todo.id === id)

            const prev = oldState.todos.slice(0, idx);
            const old_todo = oldState.todos[idx]
            const new_todo = {...old_todo, done: !old_todo.done}
            const next = oldState.todos.slice(idx + 1);

            const result = [...prev, new_todo, ...next];

            return {todos: result}
        })
    }

    counterTodo = (todos) => {
        return todos.filter((todo) => todo.done === false).length
    }

    counterDone = (todos) => {
        return todos.filter((todo) => todo.done === true).length
    }

    render() {
        const filteredTodos = this.onFilterByStatus(this.state.todos, this.state.status)

        const countToDo = this.counterTodo(this.state.todos)
        const countDone = this.counterDone(this.state.todos)
        const statuses = this.state.status
        return (
            <div className="todo-app">
                <AppHeader toDo={countToDo} done={countDone}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter onStatusChange={this.onStatusChange}
                                      statuses={statuses}
                    />
                </div>

                <TodoList
                    onDelete={this.onDelete}
                    onToggleImportant={this.onToggleImportant}
                    todos={filteredTodos}
                    done={this.onlyDone}
                    onToggleDone={this.onToggleDone}
                />
            </div>
        );
    }
}

export default App;
