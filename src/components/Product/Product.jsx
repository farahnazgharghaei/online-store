import React, { useState } from "react";
import "./Product.css";

const Product = ({ id, title, image, price, handelTotalQty }) => {

  const [qty, setQty] = useState(0);
  
  const addToCart = () => {
    setQty(qty + 1);
    handelTotalQty(1);
     console.log(qty);
  };
  const deleteFromCart=()=> {
  setQty(qty-1);
handelTotalQty(-1);
 console.log(qty);
}

  
  return (
    <div className="col">
      <div className="card bg-white" id={id}>
        <img src={image} className="card-img-top h-50" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          {qty ? (
            <div className="w-40 qty-box bg-white shadow py-1 px-3 d-flex align-items-center justify-content-between rounded ">
              <button className="btn link-danger fw-bold text-decoration-none  fs-5 "
              onClick={deleteFromCart}
              >
                -
              </button>
              <span className="bg-white text-danger d-xxl-inline-flex p-1 bd-highlight">
                {qty}
              </span>
              <button
                className="btn link-danger text-decoration-none  fs-5"
                onClick={addToCart}
              >
                +
              </button>
            </div>
          ) : (
            <button className="btn btn-danger me-3" onClick={addToCart}>
              Add To Cart
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default Product;
