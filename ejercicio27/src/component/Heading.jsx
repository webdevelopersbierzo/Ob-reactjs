import React from 'react';
import {Box, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import{ Add } from '@mui/icons-material';
import { blueGrey, lightBlue, teal } from '@mui/material/colors';
import { placements } from '@popperjs/core';

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
            
            
        </Box>

        
        
    );
}

export default Heading;
