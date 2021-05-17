import React, { useState } from "react";
import Card from "../components/Card";
import "../styles/Shop.css";

function Shop() {
  const [products, setProducts] = useState([
    {
      name: "Mask",
      description: "mask off",
      qty: 50,
      url: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80",
    },
  ]);
  return (
    <div className="shop-container">
      <h2 className="shop-text">Medical Products</h2>
      <div className="cards">
        {products.map((product, index) => <Card data={product} key={index} />)}
        <div className="blank-space"></div>
      </div>
    </div>
  );
}

export default Shop;
