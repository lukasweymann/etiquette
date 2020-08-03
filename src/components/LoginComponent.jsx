import React from "react";
import "./LoginComponent.css";

const LoginComponent = () => {
  return (
    <div className="login-component">
      <h3>Login</h3>
      <form>
        <label>
          Your email<span>*</span>
        </label>
        <input type="email" required />
        <label>
          Your password<span>*</span>
        </label>
        <input type="password" required />
        <button className="login-button" type="submit" href="#">
          Login
        </button>
        <a href="#" className="forgot-your-password">Forgot your password?</a>
      </form>
      
    </div>
  );
};

export default LoginComponent;
