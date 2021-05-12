import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <form>
        <div className="form-inner">
          <h2 className="login-text">Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password.."
            />
          </div>
          <input type="submit" value="LOGIN" className="loginBtn" />
        </div>
        <div className="notsign-text">
          <a href="/register">
            Not signed yet?
            <br></br>
            Register now!
          </a>
        </div>
      </form>
  )
}

export default Login

