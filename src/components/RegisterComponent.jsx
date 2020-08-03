import React from "react";
import "./RegisterComponent.css";
import StripeCheckoutButton from "./StripeButtonComponent";

const RegisterComponent = () => {
  const membership = "$0.99";
  return (
    <div className="register-component">
      <h3>Register</h3>
      <form>
        <label>
          Your Name<span>*</span>
        </label>
        <input type="text" />
        <label>
          Your Email<span>*</span>
        </label>
        <input type="email" required />
        <label>
          Your password<span>*</span>
        </label>
        <input type="password" required />
        <label>
          Confirm password<span>*</span>
        </label>
        <input type="password" style={{marginBottom: "20px"}}/>
        <p className="privacy-policy">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a className="privacy-policy-link">privacy policy.</a></p>
        <StripeCheckoutButton price={membership} />
      </form>
    </div>
  );
};

export default RegisterComponent;
