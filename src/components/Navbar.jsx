import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faMagnifyingGlass,faFilm,faTv,faDownload,faHeart,faPlus} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Navbarcomp from './Navbarcomp'
import { Link, NavLink ,Outlet} from 'react-router-dom'

import logo from '../assets/images.png'
const Navbar = () => {
  return (
    <div className='bg-transparent z-20 fixed'>
      <nav className="h-dvh flex flex-row w-16 justify-around bg-transparent  ml-2 rounded-xl">
      <img src={logo} alt="" className='w-20 h-20 text-4xl m   bg-inherit' />
      <div className='flex flex-row justify-around bg-transparent flex-1'>
      <NavLink to='/' className='bg-transparent'><Navbarcomp icon={faHouse} name={'HOME'}></Navbarcomp></NavLink>
      <NavLink to='/search' className='bg-transparent'><Navbarcomp icon={faMagnifyingGlass} name={'SEARCH'}></Navbarcomp></NavLink>
      <NavLink to='/addmovie'className='bg-transparent'><Navbarcomp icon={faPlus} name={'ADD MOVIE'}></Navbarcomp></NavLink>
      <NavLink to='/allmovies' className='bg-transparent'><Navbarcomp  icon={faFilm} name={'MOVIES'} ></Navbarcomp></NavLink>
       
      </div>
      <div className='flex justify-center bg-transparent'>
        <Navbarcomp icon={faUser} name={'USER'} ></Navbarcomp>
      </div>
      </nav>
    </div>
  )
}

export default Navbar

