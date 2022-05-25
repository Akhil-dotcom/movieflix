import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";
import { BiHomeAlt, BiCameraMovie, BiSearchAlt, BiHeart } from "react-icons/bi";

function BottomNav() {
  return (
    <div className="bottomNav__container">
      <div className="bottomNav">
        <Link to="/">
          <BiHomeAlt size={30} />
        </Link>
        <Link to="/movies">
          <BiCameraMovie size={30} />
        </Link>
        <Link to="/search">
          <BiSearchAlt size={30} />
        </Link>
        <Link to="/liked">
          <BiHeart size={30} />
        </Link>
      </div>
    </div>
  );
}

export default BottomNav;
