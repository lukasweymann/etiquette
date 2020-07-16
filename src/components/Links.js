import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Links.css";
import HomeIcon from "@material-ui/icons/Home";

export default function NavLinks() {
  return (
    <div className="nav-links">
    <Router>
      <Link className="nav-links__singlelink homepage-link" to="homepage">
        <HomeIcon />
      </Link>
      <Link className="nav-links__singlelink topics-link" to="topics">Topics</Link>
      <Link className="nav-links__singlelink our-mission-link" to="our-mission">Our Mission</Link>
      <Link className="nav-links__singlelink about-us-link" to="about-us">About Us</Link>
      <Link className="nav-links__singlelink contact-link" to="contact">Contact</Link>
      </Router>
    </div>
  );
}

