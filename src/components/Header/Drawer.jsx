import React from "react";
import "../../styles/Header.css";

function Drawer({ isOpen, setdrawerState }) {
  return (
    <div
      className={isOpen ? "drawer__container" : "drawer__hidden"}
      onClick={() => setdrawerState(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={isOpen ? "drawer" : "drawer__hidden"}
      >
        Drawer
      </div>
    </div>
  );
}

export default Drawer;
