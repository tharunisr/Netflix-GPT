import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {addTrailer} from "../utils/movieSlice";
import {API_options} from "../utils/constants"

const useMovieTrailer = (movieId) => {
   const dispatch=useDispatch();
 
  
//fetch a trailer to make api using movie ID &&
    const getMovieTrailer=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_options);
      const json=await data.json();
      const filterTrailer=json.results.filter((video)=>video.type==="Trailer");
      const trailer=filterTrailer.length ? filterTrailer[0] : <h1>There is no trailer</h1>;
      // console.log(trailer);
      dispatch(addTrailer(trailer));
      
    }   
    useEffect(()=>{
      getMovieTrailer();
    },[])

}

export default useMovieTrailer;