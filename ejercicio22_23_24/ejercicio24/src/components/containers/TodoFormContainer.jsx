import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/actionsTypes'
import TodoForm  from '../pure/TodoForm'


const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) =>{
    return {
        submit: (text)=>{
            dispatch(addTodo(text))
        
    }
}}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)
export default TodoFormContainer