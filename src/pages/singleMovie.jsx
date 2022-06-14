import React from "react";
import { useParams } from "react-router-dom";

function SingleMovie() {
  const { id } = useParams();
  console.log(id);
  return <div style={{ color: "white" }}>SingleMovies</div>;
}

export default SingleMovie;
