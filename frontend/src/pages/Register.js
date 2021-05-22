import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Register.css";

function Register() {
  const [stateRegister, setStateRegister] = useState({
      isSuccessfull: false
  });
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const url = "/register/process";
    fetch(url, {
      method: "post",
      headers: {
        'Accept': "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((res) => {
          if(res.username === details.username){
              setStateRegister({isSuccessfull: true});
          }
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <Header />
      <div className="form-inner">
        <h2 className="login-text">Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.name}
            placeholder="Enter your username..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
            placeholder="Enter your email..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
            placeholder="Enter your password.."
          />
        </div>
        <input type="submit" value="SIGN UP" className="loginBtn" />
      </div>
      <div className="state-text" style={stateRegister.isSuccessfull ? {} : { display: 'none' }}>
            User created successfully!
      </div>
    </form>
  );
}

export default Register;
