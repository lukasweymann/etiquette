import React from "react";
import "./PremiumUserPage.css";

import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import NavLinks from "../components/NavLinks";
import Footer from "../components/Footer";
import PremiumMembership from "../components/PremiumMembership";
import { HashLink } from "react-router-hash-link";
import Business from "../images/business.png";

export default function PremiumUserPage() {
  return (
    <div className="premium-user__page">
      <div className="premium-user-page__background">
        <NavLinks />

        <PremiumMembership />
        <HashLink
          className="premium-user-page__cta"
          to={{ pathname: "my-account", hash: "#premium-register" }}
        >
          GET YOUR MEMBERSHIP
        </HashLink>
      </div>
      <div className="premium-user__container">
        <h1 className="premium-user-page__h1" id="premium-register">My account</h1>
        <div className="premium-user__components" >
          <LoginComponent />
          <RegisterComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
