import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const Videobackground = ({movieId}) => {

 const trailerKey=useSelector((store => store.movie.trailerVideo));
  
 useMovieTrailer(movieId);

  return(
  <div className="w-full">
       <iframe className="w-full aspect-video" src={"https://www.youtube.com/embed/" + trailerKey?.key + "?autoplay=1&mute=1"}
       title="YouTube video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin" ></iframe>
  </div>
  )
}

export default Videobackground;



