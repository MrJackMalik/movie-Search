import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieItem } from "../MovieItem/MovieItem";
import "./Popular.scss";

export const Popular = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?", {
        params: {
          api_key: "41b484f8ece1bd6a810cc673410dd71f",
        },
      })
      .then(function (response) {
        setData(response.data.results);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="box">
      <div className="container">
        <ul className="popular-list">
          {data.map((e) => (
            <MovieItem obj={e} />
          ))}
        </ul>
      </div>
    </div>
  );
};
