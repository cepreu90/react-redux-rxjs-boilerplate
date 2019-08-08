import { ADD, SUB } from '../actions/todoAction'

// init state of the values for the store: counter.
const initState = {
    counter: 0,
}

// conter reducer. Will incroment or decrement the value in the store based on the action
const counter = (state = initState, action) => {
    switch (action.type) {
        case ADD: {
            console.log(
                `Reducer reviced event: ${action.type} and will update store`
            )
            return { counter: state.counter + 1 }
        }
        case SUB: {
            console.log(
                `Reducer reviced event: ${action.type} and will update store`
            )
            return { counter: state.counter - 1 }
        }
        default:
            return state
    }
}

export default counter
