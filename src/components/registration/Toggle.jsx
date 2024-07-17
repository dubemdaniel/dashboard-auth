import React from "react";
import { NavLinks } from "./NavLinks";
import { NavLink, useLocation } from "react-router-dom";

const Toggle = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between w-[8rem]">
      {NavLinks.map((links, index) => (
        <button key={index}
          className={
            location.pathname === links.href ? "border-b-2 border-red-400" : ""
          }
        >
          <NavLink to={links.href}> {links.name}  </NavLink>
          </button>
      ))}
      {/* <span className="text-[#757475b6] ">Log In</span> */}
    </div>
  );
};

export default Toggle;
