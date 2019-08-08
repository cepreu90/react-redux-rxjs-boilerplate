import React from 'react'

// Todo Component with props comming from the container component
const Todo = ({ sub, add, counterValue }) => {
    return (
        <div>
            <p>my Todo component</p>
            <p>{`Counters: ${counterValue}`}</p>

            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
        </div>
    )
}

export default Todo
