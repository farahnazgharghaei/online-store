import React, { useState } from "react";
import "./Product.css";
const Product = ({ id, title, image, price }) => {
 
  // let qty=0;
  const [qty, setQty] = useState(0);
  const addToCart = () => {
    // qty++
    setQty(qty + 1);
    // console.log(qty);
  };

  return (
    <div className="col">
      <div className="card" id={id}>
        <img src={image} className="card-img-top h-50" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <button className="btn btn-primary" onClick={addToCart}>
            Add To Cart
          </button>
          <span>{qty}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
