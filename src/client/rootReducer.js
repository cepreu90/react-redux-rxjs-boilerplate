import { combineReducers } from 'redux'
import counter from './reducers/todoReducer'

const rootReducer = combineReducers({
    counter,
})

export default rootReducer
