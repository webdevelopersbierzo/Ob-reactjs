import React from 'react';
import Box from '@mui/material/Box'
import { blueGrey } from '@mui/material/colors';
const Footer = () => {
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            p:1,
            backgroundColor: blueGrey[900],
            opacity: [0.9, 0.8, 0,7],
            color: 'background.paper',
            height:100
        }}>
            <small>@webdevelopersbierzo</small>
        </Box>
    );
}

export default Footer;
