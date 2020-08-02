import React, { useEffect } from "react";
// import Ribbon from "../images/BIGBANG.png";

const links = [
  {
    title: "Dos and Donts",
    id: 0,
  },
  {
    title: "COVID19",
    id: 1,
  },
  {
    title: "Essentials",
    id: 2,
  },
  {
    title: "Punctuality",
    id: 3,
  },
  {
    title: "Tipping",
    id: 4,
  },
  {
    title: "Safety",
    id: 5,
  },
  {
    title: "Communication",
    id: 6,
  },
  {
    title: "Dating",
    id: 7,
  },
];

const LeftSideBar = (props) => {
  // useEffect(() => {
  //   props.handleQuery(`dos and donts`);
  // }, []);

  const linksMapping = links.map((linkItem) => {
    return (
      <a
        onClick={() => props.handleQuery(linkItem.title.toLowerCase(), linkItem.id)}
        className={
          "sidebar-navigation-item " +
          (props.currentId == linkItem.id ? "sidebar-navigation-item--active" : "")
        }
      >
        {linkItem.title}
      </a>
    );
  });
  return (
    <div className="left-sidebar left-sidebar--visible">
      <div className="left-sidebar__toolbar">
        <a className="ribbon" href="/">
         
        </a>
      </div>
      {linksMapping}
     
    </div>
  );
};

export default LeftSideBar;
