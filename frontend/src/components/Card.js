import React, {useState} from 'react'
import "../styles/Card.css"

function Card(props) {
    const [productData, setProductData] = useState(props.data);
    return (
        <div className="card">
          <img
            src={productData.url}
            alt={productData.description}
          ></img>
          <div className="product-description">
            <h1 className="product-title">{productData.name}</h1>
            <h3 class="product-details">see details</h3>
            <div className="description">
              <p>
                {productData.description}
              </p>
            </div>
            <form action="" className="add-form">
              <div className="qty-input">
                <label for="qty">Quantity available:</label>
                <input type="text" name="qty" className="qty" placeholder={productData.qty} />
              </div>
              <button className="add-btn">Add to cart</button>
            </form>
          </div>
        </div>
    )
}

export default Card
