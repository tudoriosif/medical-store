import React from "react";
import "../styles/Shop.css";
function Shop() {
  return (
    <div className="shop-container">
      <h2 className="shop-text">Medical Products</h2>
      <div className="cards">
        <div className="card"></div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1601392842066-eb7dbcec9866?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="mask"
          ></img>
          <div className="product-description">
            <h1 className="product-title">Mask</h1>
            <h3 class="product-details">see details</h3>
            <div className="description">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                eius eligendi ea enim. Odit suscipit maiores ex! Dicta
                dignissimos in, officiis numquam nesciunt explicabo, maiores
                aperiam laboriosam atque, suscipit quaerat!
              </p>
            </div>
            <form action="" className="add-form">
              <div className="qty-input">
                <label for="qty">Quantity available:</label>
                <input type="text" name="qty" className="qty" value="1" />
              </div>
              <button className="add-btn">Add to cart</button>
            </form>
          </div>
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
}

export default Shop;
