import React, {useState} from 'react'
import "../styles/Card.css"

function Card(props) {
    const [productData, setProductData] = useState(props.data);
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
              <p>
                {productData.descriereProdus}
              </p>
            </div>
            <form action="" className="add-form">
              <div className="qty-input">
                <label htmlFor="qty">Quantity available:</label>
                <input type="number" name="qty" className="qty" placeholder={productData.cantitateProdus} max={productData.cantitateProdus} min={1} />
              </div>
              <button className="add-btn">Add to cart</button>
            </form>
          </div>
        </div>
    )
}

export default Card
