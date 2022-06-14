import React from "react";
import "../../styles/Sidebar.css";
import SidebarBtn from "./SidebarBtn";
import { BiCameraMovie, BiHomeAlt } from "react-icons/bi";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <SidebarBtn icon={<BiHomeAlt size={20} />} title="Home" link="/" />
        <SidebarBtn icon={<BiHomeAlt size={20} />} title="Trending" link="/" />
        <SidebarBtn
          icon={<BiCameraMovie size={20} />}
          title="Movies"
          link="/"
        />
        <SidebarBtn icon={<BiHomeAlt size={20} />} title="TV Shows" link="/" />
      </div>
    </div>
  );
}

export default Sidebar;
