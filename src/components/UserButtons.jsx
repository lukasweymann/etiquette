import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./UserButtons.css";

export default function UserButtons() {
  return (
    <div className="user-buttons">
      
      <HashLink
      className="sign-in-button"
      to={{ pathname: "my-account", hash: "#premium-register" }}
    >
      Login
    </HashLink>
      <NavLink to="my-account">
        <button className="sign-up-button">Get Premium 🌟</button>
      </NavLink>
    </div>
  );
}
