import React from 'react'
import { useSelector } from 'react-redux'
import Videobackground from './Videobackground'
import Videotitle from "./Videotitle"

const Maincontainer = () => {
    const movies=useSelector((store)=>store?.movie?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie=movies[0];
    // console.log(mainMovie);
    const {original_title,overview,id}=mainMovie;


  return (
    <div>
       
        <Videotitle title={original_title} overview={overview}/>
         <Videobackground movieId={id}/>
    </div>
  )
}

export default Maincontainer;