  import { Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Routes} 
    from 'react-router-dom'
  
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    

import React from 'react'
import Homepage from './pages/homepage';
import Mainlayout from './Layouts/Mainlayout';
import Search from './pages/Search';
import Likedmovies  from './pages/Likedmovies';
import Movie  from './pages/Movie';
import Addmoviepage from './pages/Addmoviepage';
import Allmovies from './pages/Allmovies';
import Editmoviepage from './pages/Editmoviepage';
import {toast} from 'react-toastify'
import Spinner from './components/Spinner';

const App = () => {

    const addmovie = async(newmovie)=>{
      // console.log(newjob);

      const res= await fetch('/api/movies',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(newmovie)
      })
      return ; 
    }


    const deletemovie =async(id)=>{
      const res= await fetch(`/api/movies/${id}`,{
        method:'DELETE'
      })
      return ; 
    };

    const editmovie=async(editedmovie)=>{
      const res= await fetch(`/api/movies/${editedmovie.id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(editedmovie)
      })
      return ; 
    }


    const router = createBrowserRouter([
      {
        path: "/",
        element: <Mainlayout />,
        children: [
          {  index: true, element: <Homepage /> },
          { path: "search", element: <Search /> },
          { path: "liked", element: <Likedmovies /> },
          {
            path: "movie/:id",
            element: <Movie deletemovie={deletemovie} />,
          },
          {
            path: "addmovie",element:<Addmoviepage addmoviesubmit={addmovie}/>,

          },
          { path:"allmovies", element:<Allmovies/>},
          { path:"editmovie/:id", element:<Editmoviepage editmoviesubmit={editmovie}/>}
        ],
      },
    ]);
    return (<RouterProvider router={router}/>)
}

export default App