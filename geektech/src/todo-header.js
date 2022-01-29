import React from 'react'

import TodoSearch from "./todo-search";
import TodoStatusFilter from "./todo-status-filter";

const TodoHeader = () => {
    return (
        <div>
            <TodoSearch />
            <TodoStatusFilter />
        </div>
    )
}

export default TodoHeader