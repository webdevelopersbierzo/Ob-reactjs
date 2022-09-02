import React,{ useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import {  Box, Card, CardActions, CardContent, CardHeader, IconButton, ToggleButton, Typography, } from '@mui/material';
import { Delete, Edit,  DoneAllOutlined} from '@mui/icons-material'
import { Link } from 'react-router-dom';


const Tasklist = () => {
    
    const context = useContext( GlobalContext);
    const {deleteTask} = useContext(GlobalContext);
    
   
    
    return (
        <Box sx={
            {
                display:'flex',
                flexDirection:'column',
                mb:10,

            }
        }>
            {context.tasks.map((task, index)=>(
                (
                    <Card key={index} sx={{maxWidth:900,mb:2, boxShadow:5}}>
                        <CardHeader
                            // avatar={
                            //     <Avatar sx={{bgcolor:blueGrey[200]}}>
                            //         {task.id}
                            //     </Avatar>
                            // }
                            title={task.title}
                            subheader={task.id}

                        />
                        <CardContent>
                            <Typography variante='body2' color='text.secondary'>
                                {task.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton 
                                arial-label="Delete Task"
                                onClick={()=>deleteTask(task.id)}
                            >                              
                                <Delete></Delete>
                               
                            </IconButton>
                            <Link to={`/edit/${task.id}`}>
                                <IconButton arial-label='Edit Task'>
                                    <Edit></Edit>
                                </IconButton>
                            </Link>
                            <ToggleButton value='true'                            
                            >
                                <DoneAllOutlined></DoneAllOutlined>
                            </ToggleButton>
                            
                        </CardActions>

                        
                    </Card>
                )


            ))}
        </Box>

    )
       
            
                
                
              
               
                
                
            

        
    ;
}

export default Tasklist;
