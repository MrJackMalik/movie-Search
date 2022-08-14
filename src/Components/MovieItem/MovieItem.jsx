import React from "react";
import { Link } from "react-router-dom";
import "./MovieItem.scss";
export const MovieItem = ({ obj }) => {
  return (
    <Link to={`/movie/${obj.id}`}>
      <li key={obj.id} className="movie-item">
        <img
          src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
          alt={obj.original_title}
        />
        <div className="movie-item__body">
          <h2>{obj.original_title}</h2>
          <span className="point">{obj.vote_average}</span>
          <p>{obj.id}</p>
          <p>{obj.release_date}</p>
        </div>
      </li>
    </Link>
  );
};
