import React from 'react'
import Header from '../components/Header'
import Moviecards from '../components/moviecards';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Homepage = () => {
  return (
    <div>
        <Header/>
        <Moviecards dynamiccss1='p-5' dynamiccss2='grid grid-cols-4 gap-4'/>
    </div>
  )
}

export default Homepage