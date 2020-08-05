import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./NavLinks.css";
import HomeIcon from "@material-ui/icons/Home";
import Ribbon from "../images/BIGBANG.png";
import USerButtons from "../components/UserButtons";
import LoggedInButtons from "../components/LoggedInButtons";
import Cookies from "js-cookie";

export default function NavLinks() {
  const [authorized, setAuthorized] = useState(false);
  console.log("HEEEY", Cookies.get("confirmed"));
  useEffect(() => {
    if (Cookies.get("confirmed")) {
      setAuthorized(true);
    }
  }, []);

  return (
    <div className="nav-links">
      <NavLink className="nav-links__singlelink homepage-link" exact to="/">
        <img src={Ribbon} />
      </NavLink>

      <NavLink
        className="nav-links__singlelink our-mission-link"
        to="/our-mission"
      >
        Our Mission
      </NavLink>
      <NavLink className="nav-links__singlelink about-us-link" to="/about-us">
        About Us
      </NavLink>
      <NavLink className="nav-links__singlelink contact-link" to="/contact">
        Contact
      </NavLink>
      {authorized ? <LoggedInButtons /> : <USerButtons />}
    </div>
  );
}
