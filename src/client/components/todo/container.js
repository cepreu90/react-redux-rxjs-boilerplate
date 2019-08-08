import React from 'react'
import Todo from '.'
import { add, sub } from '../../actions/todoAction'
import { connect } from 'react-redux'

// container component
const TodoContainer = props => {
    const { counterValue, add, sub } = props
    return <Todo counterValue={counterValue} add={add} sub={sub} />
}

// short representation  of the same component
// const TodoContainer = props => <Todo counterValue {...props} />

// grap counterValue from the store and add it to component props:
const mapStateToProps = state => ({
    counterValue: state.counter.counter,
})

// grap actions and add it to component props
const mapDispatchToProps = dispatch => ({
    add: () => dispatch(add()),
    sub: () => dispatch(sub()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer)
