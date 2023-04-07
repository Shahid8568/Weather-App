import React from 'react'
import loading from './image/loading.gif'

const Spinner = () => {
  return (
    <div>
       <img src={loading} alt="" id='Loading'/>
       <h2 id="loadingH2">Detecting Your Location</h2>
    </div>
  )
}

export default Spinner