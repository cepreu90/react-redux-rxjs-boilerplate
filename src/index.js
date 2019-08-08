import React from 'react'
import ReactDOM from 'react-dom'
import TodoContainer from './client/components/todo/container'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './client/rootReducer.js'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './client/rootEpic'

const epicMiddleware = createEpicMiddleware()

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(epicMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

epicMiddleware.run(rootEpic)

ReactDOM.render(
    <Provider store={store}>
        <TodoContainer />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
