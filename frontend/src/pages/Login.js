import React, { useState } from "react";
import "../styles/Login.css";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";

function Login() {
  // React hook care transmite si preia datele create anterior si le trimite la un alt endpoint in cazul nostru dashboard (transmiterea datelor intre routing)
  let history = useHistory();

  // Declarare stare generala (daca utilizatorul s-a conectat sau nu)
  const [stateLogin, setStateLogin] = useState("");

  // Declarare variable a caror stare se modifica pe parcursul aplicatiei
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler =  (event) => {
    // Prevenire refreshuire pagina
    event.preventDefault();

    // ENDPOINT-ul din spring la care facem requestul
    const url = `/login/process/${email}`;

    // Executia requestului
    fetch(url, {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json()) // Primul request returnat de back end pe care il transformam in json
      .then((res) => {
        if (res.password === password && res.email === email) { // verificam daca corespunde back-end cu front-end
          // pentru ca nu facem tot timpul acest request salvam loginul userului in localStorage de unde il putem prelua
          localStorage.setItem("user", JSON.stringify(res));
          // trimitem la endpointul de dashboard datele userului provenite de la backend
          history.push({
            pathname: "/dashboard",
            user: res,
          });

        } else {
          setStateLogin(false); // daca nu corespund setam variabila de stare a aplicatiei ca esuata
        }

      });
  };

  return (
    <form onSubmit={submitHandler}>
      <Header />
      <div className="form-inner">
        <h2 className="login-text">Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            onChange={(event) => setEmail(event.target.value)} // la modificare se rescriu varibilele de stare declarate sus
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password.."
            onChange={(event) => setPassword(event.target.value)}// la modificare se rescriu varibilele de stare declarate sus
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
      <div
        className="state-text"
        style={stateLogin !== "" ? {} : { display: "none" }}
      >
        {stateLogin === false ? "Login failed!" : "Login is ok!"} 
        {/* Daca nu au fost introduse datele corecte se afiseaza un mesaj */}
      </div>
    </form>
  );
}

export default Login;
