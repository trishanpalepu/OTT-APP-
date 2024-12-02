import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Navbarcomp = ({icon,name}) => {

    const [ishoverd,setishoverd]=useState(false)
    return (
      <div className='bg-transparent'>
        <div className='flex flex-row items-center bg-transparent'>
            <FontAwesomeIcon onMouseEnter={()=>setishoverd(true)} onMouseLeave={()=>setishoverd(false)} className='text-xl pl-8 hover:opacity-60 bg-transparent' icon={icon} style={{color: "#ffffff",}} />
            <div className={`bg-transparent dark:text-slate-300 pl-10 my-4 w-1 drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)] ${ishoverd?'visible':'invisible'}`}  >{name}</div>
        </div>
      </div>
    )
  }

export default Navbarcomp