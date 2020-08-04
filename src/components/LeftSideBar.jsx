import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
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
  const [authorized, setAuthorized] = useState(false);
  console.log("HEEEY", Cookies.get("confirmed"));
  useEffect(() => {
    if(Cookies.get("confirmed")){
setAuthorized(true);
    }
  }, []);
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
     {authorized? <div><a
        onClick={() => props.handleQuery('business_communication')}
        className={
          "sidebar-navigation-item " +
          (props.type == 'business_commnication' ? "sidebar-navigation-item--active" : "")
        }
      >
        Business Communication ✭
      </a>
      <a
      onClick={() => props.handleQuery('business_meeting_protocol')}
      className={
        "sidebar-navigation-item " +
        (props.type == 'business_meeting_protocol' ? "sidebar-navigation-item--active" : "")
      }
    >
      Business Meeting ✭
    </a>
    <a
    onClick={() => props.handleQuery('business_negotiating')}
    className={
      "sidebar-navigation-item " +
      (props.type == 'business_negotiating' ? "sidebar-navigation-item--active" : "")
    }
  >
    Business Negotiation ✭
  </a></div> : <></> }  
    </div>
  );
};

export default LeftSideBar;
