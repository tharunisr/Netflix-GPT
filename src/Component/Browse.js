import React from 'react'
import Header from './Header'
import useNowPlayingMovieList from "../hooks/useNowPlayingMovieList"
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';


const Browse = () => {

      useNowPlayingMovieList();


      return (
        <div>
            <Header/>
            <Maincontainer/>
            <Secondarycontainer/>


            {/* 
                Main Container
                  - Video Play(Trailer)
                  -Title of the Movie
                Secondary Container
                   - List of Movies * n
                   - Recommmed Movies * n
                
                  -
              
            
            */}
        </div>
  )
}

export default Browse