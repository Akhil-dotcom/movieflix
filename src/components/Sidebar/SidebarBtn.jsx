import React from "react";
import { Link } from "react-router-dom";

function SidebarBtn({ icon, title, link }) {
  return (
    <Link
      to={link}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        textDecoration: "none",
        color: "gray",
        fontSize: 16,
      }}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}

export default SidebarBtn;
