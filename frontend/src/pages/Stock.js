import React, { useEffect, useState } from "react";
import StockElement from "../components/StockElement";
import Loading from "../components/Loading";
import "../styles/Stock.css";

function Stock(props) {
  // Variabila de stare care contine datele utilizatorului
  // eslint-disable-next-line
  const [user, setUser] = useState(props.user);

  // Variabila de stare in care stocam produsele
  const [stocks, setStocks] = useState(null);

  // Luam din baza de date produsele si le plasam in variabila de stare dupa ce le-am preluat
  const getStocks = () => {
    const url = `/dashboard/stock/items/${user.id}`;

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
        setStocks(res);
      });
  };

  // React Hook care se executa dupa randarea paginii
  useEffect(() => {
    getStocks();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return !stocks ? (
    <Loading />
  ) : (
    <div className="stock-container">
      <h2 className="stock-text">Stock Products</h2>
      <h3 className="stock-small-text">Username: {user.username}</h3>
      <div className="stocks">
        {stocks.map((stock, index) => (
          <StockElement stockData={stock} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Stock;
