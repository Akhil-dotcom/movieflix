import React from "react";
import CardsMobile from "../components/Home/CardsMobile";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__mobile">
        <CardsMobile />
      </div>
    </div>
  );
}

export default Home;
