import { combineReducers } from 'redux'
import counter from './reducers/todoReducer'

// Root reducer that combines all reducers. in this case there is only 1: counter reducer
const rootReducer = combineReducers({
    counter,
    // Another reducer ..
    // And another reducer ..
})

export default rootReducer
