import { combineEpics } from 'redux-observable'
import todoEpic from './epics/todoEpic'
export default combineEpics(todoEpic)
