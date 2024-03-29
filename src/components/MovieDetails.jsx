import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PosterImg from "../assets/poster.png";

const MovieDetails = () => {
  const id = useParams().id;
  const [movie, setMovie] = useState(null);

  const fetchData = async () => {
    return await axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=d65d268c`)
      .then((res) => res.data);
  };

  useEffect(() => {
    fetchData().then((data) => setMovie(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {movie == null ? (
        <div className="movie-details-container h-300">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="movie-details-container">
          <div className="movie-poster">
            {movie.Poster === "N/A" ? (
              <img src={PosterImg} className="poster-placeholder" alt="poster" />
            ) : (
              <img src={movie.Poster} alt="poster" />
            )}
          </div>
          <div className="movie-details">
            <h2 className="movie-title">{movie.Title}</h2>
            <div className="movie-genre text-white">{movie.Genre}</div>
            <div className="movie-rating text-white">
              IMDB :&nbsp;{movie.imdbRating}
            </div>
            <div className="movie-runtime text-white">{movie.Runtime}</div>
            <div className="movie-release text-white">
              {movie.Country},&nbsp;{movie.Year}
            </div>
            <div className="movie-director text-white">
              Director:&nbsp;<span className="ash-text">{movie.Director}</span>
            </div>
            <div className="movie-actors text-white">
              Actors:&nbsp;<span className="ash-text">{movie.Actors}</span>
            </div>
            <div className="movie-desc text-white">
              Plot Summary <br />
              <p className="ash-text">{movie.Plot}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
