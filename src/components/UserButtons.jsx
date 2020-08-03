import React from "react";
import { NavLink } from "react-router-dom";
import "./UserButtons.css";

export default function UserButtons() {
  return (
    <div className="user-buttons">
      <NavLink to="my-account">
        <button className="sign-in-button">Login</button>
      </NavLink>
      <NavLink to="my-account">
        <button className="sign-up-button">Get Premium 🌟</button>
      </NavLink>
    </div>
  );
}
