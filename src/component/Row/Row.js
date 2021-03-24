import React, { useState,useEffect } from 'react';
import axios from '../../axios';
import './Row.css';
import Youtube from 'react-youtube';
// import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchURL, isLargeRow}) {
    // state
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        // if [], run once when the row loads, and don't run again
        // and if [] is not specified then it will run only once when page loads

        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            console.log(request);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const handleClick = async (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            let trailerurl = await axios.get(
              `/movie/${movie.id}/videos?api_key=48f6a0058b0e45401c971802ffb9bfe1`
            );
            setTrailerUrl(trailerurl.data.results[0]?.key);
          }
    }


    return(
        <div className="row">

            {/* title */}
            <h2>{title}</h2>
                
                <div className= "row__posters">
                    {/* containers -> serval row poster */}
                    {movies.map(movie => {
                        return <img
                            key = {movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} 
                            onClick = {() => handleClick(movie)}
                            />
                    })}
                </div>
            
            {trailerUrl && <Youtube videoId={trailerUrl} opts = {opts} />}

        </div>
    )
}

export default Row;