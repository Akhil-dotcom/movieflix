import React from "react";
import "../../styles/MovieList.css";

function MovieList({ heading, data }) {
  return (
    <div className="movieList">
      <div className="movieList__heading">
        <h3>{heading}</h3>
      </div>
      <div className="movieList__data">
        <div className="movieList__scroll">
          {data.map((item, index) => (
            <div key={index} className="movieList__single">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
