import React, { useState } from "react";

function RemoveProduct() {
  // Variabila de stare in care vedem daca a reusit stergerea produsului sau nu
  const [stateRegister, setStateRegister] = useState({
    isSuccessfull: false,
  });
  // Variabilele de stare in care stocam numele produsului sters de la user
  const [productDetails, setProductDetails] = useState({
    numeProdus: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const url = `/dashboard/shop/delete/process/byName/${productDetails.numeProdus}`;
    fetch(url, {
      method: "delete",
      headers: {
        'Accept': "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then((res) => {
          if(Number(res) >= 1){ // Ar trebui sa ne returneze numarul de coloane modificate din database
              console.log(res);
              setStateRegister({isSuccessfull: true});
          }
      });
  };

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <div className="add-inner">
        <h2 className="login-text">Remove product:</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) =>
              setProductDetails({
                numeProdus: e.target.value,
              })
            }
            value={productDetails.numeProdus}
            placeholder="Enter product name..."
          />
        </div>
        <input type="submit" value="Remove product" className="add-btn" />
      </div>
      <div
        className="state-text"
        style={stateRegister.isSuccessfull ? {} : { display: "none" }}
      >
        Product removed successfully!
      </div>
    </form>
  );
}

export default RemoveProduct;
