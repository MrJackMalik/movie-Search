import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieItem } from "../MovieItem/MovieItem";
import "./Upcoming.scss";

export const Upcoming = () => {
  const [upcoming, setComing] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/upcoming?", {
        params: {
          api_key: "41b484f8ece1bd6a810cc673410dd71f",
        },
      })
      .then(function (response) {
        setComing(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="box">
      <div className="container">
        <ul className="top-rated-list">
          {upcoming.map((e) => (
            <MovieItem key={e.id} obj={e} />
          ))}
        </ul>
      </div>
    </div>
  );
};
