import React, { useState,useContext, useEffect } from 'react';
import { Box, TextField,Button, } from '@mui/material';
import { blueGrey,lightBlue } from '@mui/material/colors';
import { GlobalContext } from '../context/GlobalContext';
import  {useNavigate, useParams } from 'react-router'
 
const Taskform = () => {
    
    const navigate = useNavigate();
    const params = useParams();

    const {addTask,tasks, updateTask}=useContext(GlobalContext)

    //const context = useContext(GlobalContext)
    //console.log(context)

    const [task, setTask] = useState({
        id:'',
        title:'',
        description:'',
    })

    const handleChange = (e) =>{
        console.log(e.target.name)
        setTask({...task, [e.target.name]:e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault()
        if(task.id){
            updateTask(task)
        }else{
            addTask(task)
        }
        
        navigate('/')
    }
    // UseEffect -> Update state
    useEffect(() => {
     const taskFound = tasks.find(task=>task.id === params.id)
     if(taskFound){
        setTask(taskFound)
     }
    }, [params.id, tasks])
    
    return (
        <Box 
            sx={
                {
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    maxWidth:400,
                    height:300,
                    backgroundColor:lightBlue[50],
                    borderRadius:5,
                    border:1,
                    borderColor: blueGrey[400],

                }
            }
        >
             <h2 >{task.id ? 'Editing a task': 'Creating a task'}</h2>
            <form onSubmit={handleSubmit}
                style={
                    {
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        

                    }
                }
            
            >
            
                <TextField 
                    id='title-input'
                    name='title'
                    label='Title'
                    variante='outlined'
                    margin='dense'
                    value={task.title}
                    onChange={handleChange}
                    type='text'
                    
                                
                />
                <TextField
                    id='description'
                    name='description'
                    type='text'
                    label='Write an description'
                    variante='outlined'
                    margin='dense'
                    multiline 
                    maxRows={4}
                    value={task.description}
                    onChange={handleChange}
                    
                />
                <Button variant='contained' color='success' type='submit'>
                    {task.id ? 'Edit' : 'Add Task'}
                </Button>
            </form>
         
        
        </Box>
        
    );
}

export default Taskform;
