import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./NavLinks.css";
import HomeIcon from "@material-ui/icons/Home";



export default function NavLinks() {
 
 
  return (
    <div className="nav-links">
     
      <NavLink className="nav-links__singlelink homepage-link" exact to="/">
        <HomeIcon />
      </NavLink>

      <NavLink    
        className="nav-links__singlelink our-mission-link"
        to="our-mission" 
      >
        Our Mission
      </NavLink>
      <NavLink className="nav-links__singlelink about-us-link" to="about-us">
        About Us
      </NavLink>
      <NavLink className="nav-links__singlelink contact-link" to="contact">
        Contact
      </NavLink>
    </div>
  );
}
