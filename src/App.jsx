import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home";
import "./App.css";
import SingleMovie from "./pages/singleMovie";

function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<div>Movie</div>} />
          <Route path="movies/:id" element={<SingleMovie />} />
          {/* id = 123 */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
