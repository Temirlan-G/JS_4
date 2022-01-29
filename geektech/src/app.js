import React from 'react'

import TodoHeader from "./todo-header";
import TodoList from "./todo-list";

const App = () => {
    const todos = [
        {id: 1, label: 'Drink cola', done: false, important: false},
        {id: 2, label: 'Learn react', done: false, important: false},
        {id: 3, label: 'Drink vodka', done: false, important: false},
        {id: 4, label: 'Drink tan', done: false, important: false},
    ]

    return (
        <div>
            <TodoHeader />
            <TodoList todos={todos}/>
        </div>
    )
}

export default App