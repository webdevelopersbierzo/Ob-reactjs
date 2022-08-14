import React, {useState, useEffect} from 'react';
import {getRandomJoke} from '../../services/axiosService.js';
import Button from '@mui/material/Button';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Box } from '@mui/material';

const JokeRamdon = () => {

    const [joke, setJoke] = useState('');
    const [favoriteAlt, setFavoriteAlt] = useState(0);
    const [favoriteDown, setFavoriteDown] = useState(0)
    useEffect(() => {
      obtainJokes();
    },[])
    
    const obtainJokes = ()=>{
        getRandomJoke()
            .then((response) =>{
                if(response.status === 200){                                     
                    setJoke(response.data.value)
                }
    
                
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })     
    }
    const addFavoriteAlt = () =>{
        setFavoriteAlt(favoriteAlt + 1);
    }
    const addFavoriteDown = ()=>{
        setFavoriteDown(favoriteDown + 1);
    }
    return (
        <div>
            <h2> Generador de chistes </h2>
            {
                joke !== '' ?
                (
                    <div>
                        <div>
                            <p>{`${joke}`}</p>
                        </div>
                        <button onClick={obtainJokes}>Ramdom Jokes</button>
                        <Box mt={2}>
                            <Button  onClick={addFavoriteAlt} variant="outlined" startIcon={<ThumbUpAltOutlinedIcon />} color="success">Me gusta</Button>
                            <Button  onClick={addFavoriteDown} variant="outlined" startIcon={<ThumbDownOutlinedIcon />} color="error">No me gusta</Button>
                        </Box>
                        <Box mt={2}>
                           <span>Me gusta: {favoriteAlt} |  </span>
                           <span>Me gusta: {favoriteDown}</span>
                        </Box>
                    </div>
                    

                )
                :
                (
                    <div>
                        <button onClick={obtainJokes}>Ramdom Jokes</button>
                    </div>
                )
            }
            
        </div>
    );
}

export default JokeRamdon;
