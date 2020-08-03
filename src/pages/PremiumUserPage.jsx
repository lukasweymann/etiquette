import React from "react";
import "./PremiumUserPage.css";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import NavLinks from "../components/NavLinks";
import Footer from "../components/Footer";
import PremiumMembership from "../components/PremiumMembership";
import Business from "../images/business.png";

export default function PremiumUserPage() {
  return (
    <div className="premium-user__page">
      <NavLinks />
      <div className="premium-user__container">
        <PremiumMembership />

        <h1 className="premium-user-page__h1">My account</h1>
        <div className="premium-user__components">
          <LoginComponent />
          <RegisterComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
