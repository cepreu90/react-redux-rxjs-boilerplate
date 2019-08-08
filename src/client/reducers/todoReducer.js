import { ADD, SUB } from '../actions/todoAction'

const initState = {
    counter: 0,
}

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
