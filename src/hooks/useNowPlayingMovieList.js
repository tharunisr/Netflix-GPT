import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { useEffect } from "react";
import { addnowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovieList= () =>{

      const dispatch=useDispatch();
    
      const getNowPlayingMovieList=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
        const json= await data.json();
        // console.log(json.results);
        dispatch(addnowPlayingMovies(json.results))
      }
    
      useEffect(()=>{
        getNowPlayingMovieList();
      },[])
}

export default useNowPlayingMovieList;