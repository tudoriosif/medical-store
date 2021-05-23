import React, { useState } from "react";

function StockElement(props) {
  // Variabila de stare care contine datele stockului curent
  // eslint-disable-next-line
  const [stockData, setStockData] = useState(props.stockData);

  // Delete Handler
  const submitHandler = (e) => {
    e.preventDefault();
    const url = `/dashboard/stock/delete/${stockData.produs.id}/${stockData.idStoc}`;

    // // Executia requestului
    fetch(url, {
      method: "delete",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json()) // Primul request returnat de back end pe care il transformam in json
      .then((res) => {
        if(res === true){
            // In cazul in care a reusit requestul sa dea refresh la pagina pentru a actualiza stockul
            window.location.reload();
        }else{
            console.log(res);
        }
      });
  };

  return (
    <div className="stock-element">
      <div className="stock-id">
        <span>Stock ID: {stockData.idStoc}</span>
      </div>
      <div className="stock-product">
        <span>Product: {stockData.produs.numeProdus}</span>
      </div>
      <form className="stock-qty" onSubmit={submitHandler}>
        <label htmlFor="prod-qty">Qty:</label>
        <input
          readOnly
          type="number"
          name="prod-qty"
          className="prod-qty"
          value={stockData.cantitate}
        />
        <button className="sell-btn">SELL</button>
      </form>
    </div>
  );
}

export default StockElement;
