import { combineEpics } from 'redux-observable'
import todoEpic from './epics/todoEpic'

// root Epic that combines all epics. in this case there is only 1: todo epic
export default combineEpics(
    todoEpic
    // another epic..
    // and another epic..
)
