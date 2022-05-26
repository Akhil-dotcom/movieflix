import React from "react";
import Cards from "../components/Home/Cards";
import MovieList from "../components/Home/MovieList";
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
  return (
    <div className="home">
      <div className="sidebar">Sidebar</div>
      <div className="home__mobile">
        <Cards />
        <MovieList heading="Trending" data={data} />
        <MovieList heading="Trending" data={data} />
        <MovieList heading="Trending" data={data} />
      </div>
    </div>
  );
}

export default Home;
