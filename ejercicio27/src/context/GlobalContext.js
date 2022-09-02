import { createContext, useReducer } from "react";
import appReducer from "./appReducer";
import {v4} from 'uuid'


const initialState = {
    tasks:[
        {
            id: '1',
            title: 'Title One',
            description: 'Description one',
            isDone: false
        },
        {
            id: '2',
            title: 'Title Two',
            description: 'Description two',
            isDone: false
        }
    ]
}

export const GlobalContext = createContext(initialState);


export const ContextProvider = ({children})=>{

    const[state, dispatch] = useReducer(appReducer, initialState)

    const addTask = (task)=>{
        
       dispatch({type:'ADD_TASK', payload:{...task,id:v4()}})
       console.log(task)
    }
    const deleteTask = (id)=>{
        
        dispatch({type:'DELETE_TASK', payload: id})
    }
    const updateTask = (task) => {
        dispatch({type: 'UPDATE_TASK', payload:task})
    }
    return <GlobalContext.Provider value={{...state, addTask, deleteTask, updateTask}}>
        {children}
    </GlobalContext.Provider>
    
}