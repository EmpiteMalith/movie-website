import React from 'react'
import {Link} from 'react-router-dom';
import PosterImg from '../assets/poster.png';

const MovieCard = ({movie}) => {
  return (
    <>
    <div className="img-area">
        { movie.Poster === "N/A" ? <img src={PosterImg} alt="poster" /> : <img src={movie.Poster} alt="poster" />  }
        <div className="overlay">
            <div className="content">
                <button><Link to={"/movies/"+movie.imdbID}>View Details</Link></button>
            </div>
        </div>
    </div>
     <h4>{movie.Title}</h4>
     <h5>{movie.Year}</h5>
    </>
  )
}

export default MovieCard