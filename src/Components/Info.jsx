import {React,useState,useEffect} from 'react'
import { Stack,Box} from '@mui/material'
import Currloc from './Currloc';

const Info = () => {

    const [search, setSearch] = useState("Delhi")
    const [city, setCity] = useState("Delhi")
    
    let time = new Date().toLocaleTimeString();
    let now = new Date();
    var date = now.toDateString();
    
    const [nTime,setnTime ] = useState(time);

   const updateTime = () =>{
    let time = new Date().toLocaleTimeString();
    setnTime(time);
   }

   setInterval(updateTime,1000);
    const options = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': '828ed4fcd7msh4ac840834b37d69p1d22c5jsn852724d3a7a7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = async ()=>{
  const data = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${search}`, options)
  const response = await data.json()
  setCity(response);
}

const onSubmit = ()=>{
  getWeather(search)
}

useEffect(() => {
  getWeather()
}, [])

  return (
    <Stack className='main_cont'm={"7% auto"} sx={{width:"70%",textAlign:"center"}}>
        <Box id="currLoc">
        <Currloc/>
        <Box className="dateTime" sx={{display:"flex", justifyContent:"space-between",flexDirection: "column",marginTop: "235px"}}>
        <h2>{nTime}</h2>
        <h2>{date}</h2>
        </Box>
        </Box>
    <Box className='main-box'>
    <div className="ser">
      <input type="search" className='form-control' values={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search for City" />
      <button className="btn" onClick={onSubmit}>Get Weather</button>
    </div>
          <div>  
          <h1 id="city">City : {search}</h1>
          <h2 id='temp'>Temp : {city.temp} ℃</h2><hr/>
          <h3 id="humidity">Humidity : {city.humidity} %</h3><hr/>
          <h3 id="min_temp">Min-Temp : {city.min_temp} ℃</h3><hr />
          <h3 id="max_temp">Max-Temp : {city.max_temp} ℃</h3><hr />
          <h3 id="wind_speed">Wind-Speed : {Math.round(city.wind_speed)} km/h</h3><hr/>
          <h3 id="wind_degrees">Wind-Degrees : {city.wind_degrees}</h3>
      </div>
            
    </Box>
    </Stack>
  )
}

export default Info