import React from "react";
import "./NavBarMobile.css";

export default function NavBarMobile() {
  return (
    <div class="menu-wrap">
      <input type="checkbox" class="toggler" />
      <div class="hamburger">
        <div></div>
      </div>
      <div class="menu">
        <div>
          <div>
            <ul>
              <li>
                <a className="mobile-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="mobile-link" href="our-mission">
                  our mission
                </a>
              </li>
              <li>
                <a className="mobile-link" href="about-us">
                  about us
                </a>
              </li>
              <li>
                <a className="mobile-link" href="contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
