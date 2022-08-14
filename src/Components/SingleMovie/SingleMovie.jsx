import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleMovie.scss";

export const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/` + id, {
        params: {
          api_key: "41b484f8ece1bd6a810cc673410dd71f",
        },
      })
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(function (error) {
        console.log(error);
      }, []);
  });
  return (
    <section className="single-movie">
      <div className="poster-img">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
        />
        <span className="point">{movie.vote_average}</span>
      </div>
      <div className="single-movie_details">
        <span className="details-text">
          Title: <strong>{movie.original_title}</strong>
        </span>
        <span className="details-text">
          Budget: <strong>{movie.budget}</strong>
        </span>

        <span className="details-text">
          Release Date: <strong>{movie.release_date}</strong>
        </span>
        <span className="details-text">
          Runtime period: <strong>{movie.runtime} minutes</strong>
        </span>
        <span className="details-text">
          Vote count: <strong>{movie.vote_count}</strong>
        </span>
        <span className="details-text">
          Official status: <strong>{movie.status}</strong>
        </span>
      </div>
    </section>
  );
};
