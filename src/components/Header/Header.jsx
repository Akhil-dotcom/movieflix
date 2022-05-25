import React, { useState } from "react";
import "../../styles/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMovie2Fill } from "react-icons/ri";
import Drawer from "./Drawer";
import BottomNav from "./BottomNav";

function Header() {
  const [drawerState, setdrawerState] = useState(false);
  return (
    <div className="header">
      <div className="header__mobile">
        <h2>
          <RiMovie2Fill color="#B20600" size={30} />
          <span>MovieFlix</span>
        </h2>
        <button onClick={() => setdrawerState(true)}>
          <GiHamburgerMenu size={23} color="#fff" />
        </button>
      </div>
      <Drawer isOpen={drawerState} setdrawerState={setdrawerState} />
      <BottomNav />
    </div>
  );
}

export default Header;
