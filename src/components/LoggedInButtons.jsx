import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./LoggedInButtons.css";
import Cookies from "js-cookie";

export default function LoggedInButtons() {
    function refreshPage() {
        Cookies.remove('confirmed')
        window.location.reload(false);
      }
  return (
    <div className="logged-in-buttons__main-container">
      <NavLink to="#">
        <button className="my-account-name">{Cookies.get("User")}</button>
      </NavLink>
      <NavLink to="/">
        <button className="logout-button" onClick={refreshPage}>
          Logout
        </button>
      </NavLink>
    </div>
  );
}
