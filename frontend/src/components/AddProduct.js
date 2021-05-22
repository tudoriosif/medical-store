import React, { useState } from "react";

function AddProduct() {
  // Variabila de stare in care vedem daca a reusit adaugarea produsului sau nu
  const [stateRegister, setStateRegister] = useState({
    isSuccessfull: false,
  });
  // Variabilele de stare in care stocam detaliile de la user
  const [productDetails, setProductDetails] = useState({
    numeProdus: "",
    pretProdus: "",
    imagineProdus: "",
    cantitateProdus: "",
    descriereProdus: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const url = "/dashboard/shop/create/process";
    fetch(url, {
      method: "post",
      headers: {
        'Accept': "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((res) => {
          if(res.numeProdus === productDetails.numeProdus){
              console.log(res);
              setStateRegister({isSuccessfull: true});
          }
      });
  };

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <div className="add-inner">
        <h2 className="login-text">Add product:</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                numeProdus: e.target.value,
              })
            }
            value={productDetails.numeProdus}
            placeholder="Enter product name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                descriereProdus: e.target.value,
              })
            }
            value={productDetails.descriereProdus}
            placeholder="Enter product description..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                imagineProdus: e.target.value,
              })
            }
            value={productDetails.imagineProdus}
            placeholder="Enter product image url..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="qty">Quantity:</label>
          <input
            type="text"
            name="qty"
            id="qty"
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                cantitateProdus: e.target.value,
              })
            }
            value={productDetails.cantitateProdus}
            placeholder="Enter product quantity..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                pretProdus: e.target.value,
              })
            }
            value={productDetails.pretProdus}
            placeholder="Enter product price.."
          />
        </div>
        <input type="submit" value="Add product" className="add-btn" />
      </div>
      <div
        className="state-text"
        style={stateRegister.isSuccessfull ? {} : { display: "none" }}
      >
        Product added successfully!
      </div>
    </form>
  );
}

export default AddProduct;
