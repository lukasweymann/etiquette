import React from "react";
import Ribbon from "../images/BIGBANG.png";

const LeftSideBar = (props) => (
  <div className="left-sidebar left-sidebar--visible">
    <div className="left-sidebar__toolbar">
      <a className="ribbon" href="/">
        <img src={Ribbon} />
      </a>
    </div>

    <a
      onClick={() => props.handleQuery(`dos and donts`)}
      className={
        "sidebar-navigation-item " +
        (window.location.search === "" && "sidebar-navigation-item--active")
      }
    >
      Dos and Don'ts
    </a>

    <a
      onClick={() => props.handleQuery(`covid19`)}
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=traffic-lights" &&
          "sidebar-navigation-item--active")
      }
    >
      COVID 19
    </a>

    <a
      onClick={() => props.handleQuery(`essentials`)}
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=traffic-lights-controlled-btns" &&
          "sidebar-navigation-item--active")
      }
    >
      Essentials
    </a>

    <a
      onClick={() => props.handleQuery(`punctuality`)}
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=traffic-lights-controlled-auto" &&
          "sidebar-navigation-item--active")
      }
    >
      Punctuality
    </a>

    <a
      onClick={() => props.handleQuery(`tipping`)}
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=inputs" &&
          "sidebar-navigation-item--active")
      }
    >
      Tipping
    </a>

    <a
      onClick={() => props.handleQuery(`safety`)}
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=address-book" &&
          "sidebar-navigation-item--active")
      }
    >
      Safety
    </a>

    <a
      onClick={() => props.handleQuery(`communication`)}
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=address-book" &&
          "sidebar-navigation-item--active")
      }
    >
      Communication
    </a>

    <a
      onClick={() => props.handleQuery(`dating`)}
      className={
        "sidebar-navigation-item " +
        (window.location.search === "?page=address-book" &&
          "sidebar-navigation-item--active")
      }
    >
      Dating
    </a>
  </div>
);

export default LeftSideBar;
