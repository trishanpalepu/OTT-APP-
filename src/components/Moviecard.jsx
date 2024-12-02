import React from 'react'
import { NavLink } from 'react-router-dom'


const Moviecard = (props) => {
  return (
    <div>
       
     
        <div className='m-5 w-60'>
          <NavLink to={`/movie/${props.id}`}> 
            <img src={props.movie} alt="" />
            <div>{props.name}</div>
          </NavLink>
  
      
    </div>
    </div>
  )
}

export default Moviecard