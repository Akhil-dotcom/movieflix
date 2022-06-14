import React from "react";
import { useEffect } from "react";
import Cards from "../components/Home/Cards";
import MovieList from "../components/Home/MovieList";
import Sidebar from "../components/Sidebar/Sidebar";
import Trending from "../components/Trending/Trending";
import "../styles/Home.css";

const data = [
  "https://www.themoviedb.org/t/p/original/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg",
  "https://www.themoviedb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  "https://www.themoviedb.org/t/p/original/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
  "https://www.themoviedb.org/t/p/original/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
  "https://www.themoviedb.org/t/p/original/bzSwGQE2STbClQdTuMv48WvZhQF.jpg",
  "https://www.themoviedb.org/t/p/original/aSSJMnHknzKjlZ6zybwD7eyJ4Po.jpg",
  "https://www.themoviedb.org/t/p/original/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
  "https://www.themoviedb.org/t/p/original/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg",
  "https://www.themoviedb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  "https://www.themoviedb.org/t/p/original/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
  "https://www.themoviedb.org/t/p/original/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
  "https://www.themoviedb.org/t/p/original/bzSwGQE2STbClQdTuMv48WvZhQF.jpg",
  "https://www.themoviedb.org/t/p/original/aSSJMnHknzKjlZ6zybwD7eyJ4Po.jpg",
  "https://www.themoviedb.org/t/p/original/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
];

function Home() {
  const [popularMovies, setpopularMovies] = React.useState([]);
  const [topRatedMovies, settopRatedMovies] = React.useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=57704da1fdc90ae66d9da2869dd53b3f&language=en-US&page=1"
      );
      const data = await res.json();
      setpopularMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchTopRatedData = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=57704da1fdc90ae66d9da2869dd53b3f&language=en-US&page=1"
      );
      const data = await res.json();
      console.log(data);
      settopRatedMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
    fetchTopRatedData();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="home__mobile">
        <div>
          <Cards />
          <MovieList heading="Trending" data={popularMovies} />
          <MovieList heading="Top Rated" data={topRatedMovies} />
        </div>
      </div>

      <Trending />
    </div>
  );
}

export default Home;
