import React, { useState } from "react";
import axios from "axios";
import { Router, Route, Redirect, useHistory } from "react-router-dom";
import PremiumUserPage from "../pages/PremiumUserPage";
import "./LoginComponent.css";
import { RestorePageRounded } from "@material-ui/icons";
import Cookies from 'js-cookie';

const LoginComponent = () => {
    let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  
  
  function handleUsername(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Request API.
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        
        Cookies.set("confirmed", response.data.user.confirmed)
        if(response.data.user.confirmed){
            history.push("/");
        }
        console.log("We're getting you", auth);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <div className="login-component" auth={auth}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Your email<span>*</span>
        </label>
        <input type="email" onChange={handleUsername} required />
        <label>
          Your password<span>*</span>
        </label>
        <input type="password" onChange={handlePassword} required />
        <button className="login-button" type="submit" href="#">
          Login
        </button>
        <a href="#" className="forgot-your-password">
          Forgot your password?
        </a>
      </form>
     
      
    </div>
  );
};

export default LoginComponent;
