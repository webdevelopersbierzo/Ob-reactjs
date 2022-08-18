/**
 * @file: actionsTypes.js
 * @description: actions for redux
 */

// Incremental ID for Todos
let nextTodoID = 0;


// -------------------- Action Types --------------------
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// -------------------- Action Creators -----------------

/**
 * Action Creator for ADDTODO Action
 * 
 * @param {string} text 
 * @returns  action ADD_TODO
 */
export const addTodo = (text) =>{
    return {
        type:ADD_TODO,
        payload: {
            id: nextTodoID ++,
            text
        }
    }
}

/**
 * Action creator for TOGGLE_TODO Action
 * 
 * @param {number} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id)=> {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

/**
 * Action creator for SET_VISIBILITY_FILTER action
 * 
 * @param { string } filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter)=>{
    return {
        type:SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}

