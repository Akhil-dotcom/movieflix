import React from "react";
import { AiFillStar } from "react-icons/ai";

function StarRating({ rating }) {
  const ratingValue = Math.floor(rating / 2);
  const stars = new Array(ratingValue).fill(null);
  return (
    <div>
      {stars.map((_, index) => (
        <AiFillStar key={index} color="yellow" />
      ))}
    </div>
  );
}

export default StarRating;
