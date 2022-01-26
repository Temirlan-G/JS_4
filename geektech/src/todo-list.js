import React from 'react'

import TodoListItem from "./todo-list-item";

const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
        return <li key={item.id}><TodoListItem label={item.label} /></li>
    });

    return (
        <div>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default TodoList