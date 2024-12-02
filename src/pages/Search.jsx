import React from 'react'
import { useState,useEffect } from 'react'
import Spinner from '../components/Spinner'
import Moviecard from '../components/Moviecard'
const Searchpage = () => {
  const [movie,setmovie]=useState([])
    const [loading,setloading]=useState(true)
    useEffect(
      ()=>{
        const fetchmovie = async()=>{
          try{
            // const res=await fetch('/api/movies?_limit=20')
            const res=await fetch('/api/movies ')
            const data= await res.json();
            setmovie(data)
          }
          catch(err){
            console.log(err)
          }
          finally{
            setloading(false)
          }
        }
        fetchmovie()
      },[])

      const [search,setsearch]=useState()
  return (
    <div>
      <div className='text-center font-bold text-6xl pt-10'>Search</div>
      
    <form class="flex items-center max-w-sm mx-auto pt-10" onChange={(e)=>setsearch(e.target.value)}>   
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
            
            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
        </div>
        
    </form>
    <div className='grid grid-cols-4 gap-4 pl-16'>

          {loading ?<Spinner/>: 

          movie.filter((movie)=>{
            return search===''?movie:movie.Title.includes(search)
          }).map((movie) => (
            <Moviecard key={movie.imdbID} id={movie.id} movie={movie.Poster} name={movie.Title} />

          ))

          } 
    </div>


    </div>
  )
}

export default Searchpage