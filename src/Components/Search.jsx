import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem/MovieItem";
import "./search.scss";

export const Search = () => {
  const [movies, setMovies] = useState({});
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "41b484f8ece1bd6a810cc673410dd71f",
        },
      })
      .then(function (response) {
        setMovies(response.data.results);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="box">
        <div className="container">
          <ul className="search-list">
            {movies.map((e) => (
              <MovieItem key={e.id} obj={e} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
