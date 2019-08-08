import React from 'react'
import ReactDOM from 'react-dom'
import TodoContainer from './client/components/todo/container'
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

// app entry point
ReactDOM.render(
    <Provider store={store}>
        <TodoContainer />
    </Provider>,
    document.getElementById('root')
)
