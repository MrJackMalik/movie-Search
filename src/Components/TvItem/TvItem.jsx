import React from "react";
import { Link } from "react-router-dom";
import "./TvItem.scss";
export const TvItem = ({ obj }) => {
  return (
    <Link to={`/TV/${obj.id}`}>
      <li className="TV-item">
        <img
          src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
          alt={obj.name}
        />
        <div className="TV__body">
          <h2>{obj.name}</h2>
          <span className="point">{obj.vote_average}</span>
          <p>{obj.id}</p>
          <p>{obj.release_date}</p>
        </div>
      </li>
    </Link>
  );
};
