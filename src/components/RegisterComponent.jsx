import React, { useState } from "react";
import "./RegisterComponent.css";
import StripeCheckoutButton from "./StripeButtonComponent";

const RegisterComponent = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const setUserNameHandler = ({ target }) => {
    setUserName(target.value);
  };

  const setEmailHandler = ({ target }) => {
    setEmail(target.value);
  };

  const setPasswordHandler = ({ target }) => {
    setPassword(target.value);
  };
  const setConfirmedPasswordHandler = ({ target }) => {
    setConfirmedPassword(target.value);
  };

  const onRegisterSubmit = (event) => {
    event.preventDefault();

    const body = {
      username,
      email,
      password,
      confirmedPassword,
    };

    console.log(body);
    fetch("https://etiquette-backend.herokuapp.com/auth/local/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((responseAsJson) => console.log(responseAsJson))
      .catch((err) => console.log(err));
  };
  const clearInputs = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmedPassword("");
  };

  const membership = "5.99";
  return (
    <div className="register-component">
      <h3>Register</h3>
      <form onSubmit={onRegisterSubmit}>
        <label>
          Your Name<span>*</span>
        </label>
        <input type="text" value={username} onChange={setUserNameHandler} />
        <label>
          Your Email<span>*</span>
        </label>
        <input type="email" value={email} onChange={setEmailHandler} required />
        <label>
          Your password<span>*</span>
        </label>
        <input
          type="password"
          value={password}
          onChange={setPasswordHandler}
          required
        />
        <label>
          Confirm password<span>*</span>
        </label>
        <input
          type="password"
          style={{ marginBottom: "20px" }}
          value={confirmedPassword}
          onChange={setConfirmedPasswordHandler}
          required
        />
        <p className="privacy-policy">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <a className="privacy-policy-link">privacy policy.</a>
        </p>
        <StripeCheckoutButton clearInputs={clearInputs} price={membership} />
      </form>
    </div>
  );
};

export default RegisterComponent;
