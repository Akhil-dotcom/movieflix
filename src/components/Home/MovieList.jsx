import React from "react";
import "../../styles/MovieList.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import StarRating from "../StarRating";
import { Link } from "react-router-dom";

function MovieList({ heading, data }) {
  const [initial, setInitial] = React.useState(0);
  const [final, setFinal] = React.useState(4);

  const decreasePage = () => {
    if (initial === 0) {
      return;
    }
    setInitial(initial - 1);
    setFinal(final - 1);
  };

  const increasePage = () => {
    if (final === data.length) {
      return;
    }
    setInitial(initial + 1);
    setFinal(final + 1);
  };

  return (
    <div className="movieList">
      <div className="movieList__heading">
        <h3 className="movieList__h3">{heading}</h3>
        <div style={{ display: "flex", gap: 10 }}>
          <IoIosArrowDropleft
            color={initial === 0 ? "gray" : "#fff"}
            onClick={decreasePage}
            className="icon"
          />
          <IoIosArrowDropright
            color="#fff"
            onClick={increasePage}
            className="icon"
          />
        </div>
      </div>
      <div className="movieList__data">
        <div className="movieList__scroll">
          {data.slice(initial, final).map((item, index) => (
            <Link
              to={"/movies/" + item.id}
              key={index}
              className="movieList__single"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt=""
              />
              <div className="overlay"></div>
              <div className="movieList__singleTitle">
                <div>{item.original_title}</div>
                <StarRating rating={8.7} />
              </div>
              <div className="add__movie">
                <HiPlus />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
