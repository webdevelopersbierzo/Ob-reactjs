/**
 * @file: storeConfig.js
 * @description: Store for redux
 */

import { rootReducers } from "../reducers/rootReducers";
import { composeWithDevTools} from 'redux-devtools-extension';
import { createStore } from "redux";

export const createAppStore = ()=>{
    let store = createStore(rootReducers, composeWithDevTools());

    return store;
}