import React, { useState } from "react";
import "../styles/Card.css";

function Card(props) {
  // Variabila de stare pentru datele produsului
  const [productData, setProductData] = useState(props.data);

  // Variabila de stare care contine detaliile utilizatorului, avand nevoie de ID
  // eslint-disable-next-line
  const [user, setUser] = useState(props.user);

  // Variabila de stare pentru cantitatea de stare care urmeaza sa fie scoasa de pe stock
  const [qtySell, setQty] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();

    const url = "/dashboard/stock/add";

    // Daca nu mai avem ce sa vindem nu executam requestul la back end
    if (qtySell === 0) return;
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        iduser: user.id,
        idprodus: productData.id,
        cantitate: qtySell,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
    
    // Pentru a nu re-executa un request la server modificam cantitatea ramasa de produs
    // pe front end salvand timp de loading
    setProductData({
      ...productData,
      cantitateProdus: productData.cantitateProdus - qtySell,
    });
    // Readucem cantitatea vanduta la valoarea initiala
    setQty(0);
  };

  return (
    <div className="card">
      <img
        src={productData.imagineProdus}
        alt={productData.descriereProdus}
      ></img>
      <div className="product-description">
        <h1 className="product-title">{productData.numeProdus}</h1>
        <h3 className="product-details">see details</h3>
        <div className="description">
          <p>{productData.descriereProdus}</p>
        </div>
        <form action="" className="add-form" onSubmit={submitHandler}>
          <div className="qty-input">
            <label htmlFor="qty">Quantity available:</label>
            <input
              type="number"
              name="qty"
              className="qty"
              placeholder={productData.cantitateProdus}
              max={productData.cantitateProdus}
              min={1}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
          <button className="add-btn">Add to cart</button>
        </form>
      </div>
    </div>
  );
}

export default Card;
