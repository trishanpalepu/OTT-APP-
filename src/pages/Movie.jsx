import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import Moviecards from '../components/moviecards';
const Movie = ({deletemovie}) => {
  
  const navigate=useNavigate()
    const deleteonclick =(movieid)=>{
      const confirm=window.confirm("Do you want to delete the movie")
      if(!confirm) return 
      console.log(movieid)
      deletemovie(movieid)
      toast.success("Movie deleted successfully")
      navigate('/allmovies')
    }

  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (!params.id) {
          console.log('no id');
          setLoading(false);
          return;
        }
        const res = await fetch(`/api/movies/${params.id}`);
        if (!res.ok) throw new Error('Failed to fetch movie');
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.log('Error fetching movie:');
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [params.id]);

  if (loading) return <Spinner />;
  if (!movie) return <p>Movie not found!</p>;
  const navigatetoedit=()=>{
    navigate(`/editmovie/${movie.id}`)
  }
  return (
    <div className="">

<div className='flex justify-around ml-16 pt-20'>
      <div className='mt-20 w-1/2'>
      <h1 className='text-7xl font-serif'>{movie.Title}</h1>
      <p className='text-3xl font-thin'>{movie.Genre}</p>
      <p className='text-xl font-thin'>{movie.Plot}</p>
      <button className=' text-black font-bold bg-slate-100 px-6 py-2 rounded-3xl'>Play </button>
      <button className=' text-black font-bold bg-slate-100 px-6 py-2 rounded-3xl ml-3' onClick={()=>{deleteonclick(movie.id)}}>Delete </button>
      <button className=' text-black font-bold bg-slate-100 px-6 py-2 rounded-3xl ml-3'onClick={navigatetoedit}>Edit </button>
      </div>
      <div className='w-1/4'>
        <img src={movie.Poster} alt=""  className='w-full'/>
      </div>
    </div>
    <div className='mt-20'>

    <Moviecards dynamiccss1="overflow-x-hidden" dynamiccss2=' flex  overflow-scroll gap-6' id="scroll" />
    </div>
    </div>

  );
};

export default Movie;
