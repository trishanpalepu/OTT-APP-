import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const Editmoviepage = ({editmoviesubmit}) => {
  const navigate=useNavigate()
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [Title,settitle]=useState()
  const [Director,setdirector]=useState()
  const [Year,setyear]=useState()
  const [Genre,setgenre]=useState()
  const [Language,setlanguage]=useState()
  const [id,setid]=useState()
  const [Rating, setrating] = useState()
  
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
  }, []);

  useEffect(() => {
    if (movie) {
      settitle(movie.Title);
      setdirector(movie.Director);
      setyear(movie.Year );
      setgenre(movie.Genre);
      setlanguage(movie.Language );
      setrating(movie.Rating );
      setid(movie.id );
    }
  }, [movie]);
      if (loading) return <Spinner />;
      if (!movie) return <p>Movie not found!</p>;

  const editonclick=(e)=>{
    e.preventDefault();
    const editedmovie ={
      Title,
      Director,
      Year,
      Genre,
      Language,
      id,
      Rating,
  }
  editmoviesubmit(editedmovie)
  toast.success("Movie edited sucessful")
  navigate(`/movie/${id}`)
  }    
  return (
      

<form className="max-w-md mx-auto pt-10" onSubmit={editonclick}>
    <div className='font-bold pl-20 text-4xl pb-5'>EDIT DETAILS</div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={Title} onChange={(e)=>settitle(e.target.value)} type="text" id="TItle" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="Title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={Director} onChange={(e)=>setdirector(e.target.value)} type="text"  id="Director" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="Director" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Director</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={Genre} onChange={(e)=>setgenre(e.target.value)} type="text" id="Genre" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="Genre" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Genre</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={Language} onChange={(e)=>setLanguage(e.target.value)} type="text"  id="Language" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="Language" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Language</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={id} onChange={(e)=>setid(e.target.value)} type="text" name="id" id="id" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="id" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Movie Id</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={Rating} onChange={(e)=>setrating(e.target.value)} type="number" id="Rating" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="Rating" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rating</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={Year} onChange={(e)=>setyear(e.target.value)} type="number" id="Year" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="Year" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Year</label>
    </div>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


  )
}

export default Editmoviepage