import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleTv.scss";

export const SingleTv = () => {
  const { id } = useParams();
  const [TV, setTV] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/` + id, {
        params: {
          api_key: "41b484f8ece1bd6a810cc673410dd71f",
        },
      })
      .then(function (response) {
        setTV(response.data);
      })
      .catch(function (error) {
        console.log(error);
      }, []);
  });
  return (
    <section className="single-tv">
      <div>
        {" "}
        <img
          src={`https://image.tmdb.org/t/p/w500/${TV.poster_path}`}
          alt={TV.original_title}
        />
      </div>
      <div>
        {" "}
        <h2>{TV.original_title}</h2>
        <span className="point">{TV.vote_average}</span>
        <p>{TV.id}</p>
        <p>{TV.release_date}</p>
      </div>
    </section>
  );
};
