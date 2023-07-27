import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from './MovieCard';
import { RiSearchLine } from 'react-icons/ri';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchText, searchMovies] = useState("");

    const fetchData = async () => {
        return await axios.get(`https://www.omdbapi.com/?s=${searchText}&apikey=d65d268c`).then((res) => res.data);
      };

  useEffect(() => {
    fetchData().then(data => setMovies(data.Search))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchText]);

  return (
    <div className="main-wrapper">
        <div className="search-input-area">
          <div className="search-box">
          <RiSearchLine className="search-icon" />
          <input className="search-input" placeholder="Type movie name here...." type="text" onChange={ (e) =>searchMovies(e.target.value)} />
          </div>
            
        </div>
        <div className="movie-container">
        { movies && movies.map( (movie,index) =>
        (
            <div className="movie-card" key={index}>
                <MovieCard movie={movie}/>
            </div>
        ) )
        }
    </div>
    </div>
  )
}

export default Movies