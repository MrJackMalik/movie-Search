import axios from "axios";
import React, { useEffect, useState } from "react";
import { TvItem } from "../TvItem/TvItem";
import "./TvShows.scss";
export const TvShows = () => {
  const [shows, setShows] = useState({});
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/tv/top_rated", {
        params: {
          api_key: "41b484f8ece1bd6a810cc673410dd71f",
        },
      })
      .then(function (response) {
        setShows(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="box">
      <div className="container">
        {shows.length ? (
          <ul className="tv-shows-list">
            {shows.map((e) => (
              <TvItem key={e.id} obj={e} />
            ))}
          </ul>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
};
