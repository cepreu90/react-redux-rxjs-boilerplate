import { ofType } from 'redux-observable'
import { map, ignoreElements } from 'rxjs/operators'
import { ADD, SUB } from '../actions/todoAction'

// Epic that looks for actions of type: ADD and SUB. then run some side effect. in this case just console.log( ... )
const todoEpic = (action$, store) =>
    action$.pipe(
        ofType(ADD, SUB),
        map(payload =>
            console.log(
                `todoEpic recived the event: ${payload.type}, ready to do some side effect.`
            )
        ),
        ignoreElements()
    )
export default todoEpic
