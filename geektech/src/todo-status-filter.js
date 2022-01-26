import React from 'react'

const TodoStatusFilter = () => {
    return (
        <div>
            <input type="button" value='all'/>
            <input type="button" value='active'/>
            <input type="button" value='done'/>
        </div>
    )
}

export default TodoStatusFilter