import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleMovie() {
  const [data, setdata] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`
        https://api.themoviedb.org/3/movie/${id}?api_key=57704da1fdc90ae66d9da2869dd53b3f&language=en-US`);
        const data = await res.json();
        setdata(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <div>
        <h1>{data.original_title}</h1>
        <p>{data.overview}</p>
      </div>
    </div>
  );
}

export default SingleMovie;
