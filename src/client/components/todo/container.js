import React from 'react'
import Todo from '.'
import { add, sub } from '../../actions/todoAction'

import { connect } from 'react-redux'

const TodoContainer = props => {
    const { counterValue, add, sub } = props
    return <Todo counterValue={counterValue} add={add} sub={sub} />
}

const mapStateToProps = state => ({
    counterValue: state.counter.counter,
})

const mapDispatchToProps = dispatch => ({
    add: () => dispatch(add()),
    sub: () => dispatch(sub()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer)
