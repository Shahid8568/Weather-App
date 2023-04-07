import * as React from 'react';
import { useState,useEffect} from 'react';
import axios from 'axios';
import {Box} from '@mui/material';
import Spinner from './Spinner';


export default function Currloc() {

  const [currLoca, setcurrLoca] = useState({})
  const [loading, setLoading] = useState(true)

  const location = async () =>{
    const response = await axios.get("https://ipapi.co/json");
    setLoading(true)
    setcurrLoca(response.data);
    setLoading(false);
  }
  useEffect(() => {
    location();
  }, [])
  
  return (
    <Box >
      {loading && <Spinner/>}
      <h1 style={{color:"red",margin:"15% auto"}}>{currLoca.city}</h1>
    </Box>
    
  );
}
