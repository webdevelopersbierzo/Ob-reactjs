/**
 * @file: rootReducers.js
 * @description: main reducers for redux
 */


import { combineReducers} from 'redux';
import {filterReducer } from './filterReducer';
import {todosReducer} from './todoReducer';

/**
 * Root Reducers
 */
export const rootReducers = combineReducers({
    todosState:todosReducer,
    filterState: filterReducer,

    // add more states and reducers to include then in the store
})