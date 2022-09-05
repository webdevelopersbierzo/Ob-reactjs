import React from 'react';
import {Box, Button, Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import{ Add } from '@mui/icons-material';
import {  lightBlue } from '@mui/material/colors';


const Heading = () => {
    return (
       
        <Box sx={{
            display: 'flex',
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor: lightBlue[500],
            color: 'background.paper',
                     
            
        }}>
            <Link to='/' >
                <h1 style={{paddingLeft:10}}>TaskApp</h1>
            </Link>
            <Stack
                direction='row'
                spacing={2}
            >
                <Link to='/Filtertask'>
                    <Button
                        variant='contained'
                        color='info'
                        size='small'


                    >
                        Undone Taks
                    </Button>
                </Link>
                <Link to='/add'>
                    <Button   
                        variant='contained'
                        color='secondary'
                        size='small'
                        sx={ { mr:3 } }
                    >
                    <Add/>Add task
                    </Button>
                </Link>
            </Stack>
            
            
            
        </Box>

        
        
    );
}

export default Heading;
