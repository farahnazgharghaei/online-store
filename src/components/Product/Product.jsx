import React, { useState } from "react";
import "./Product.css";

const Product = ({ id, title, image, price, handelTotalQty }) => {
  // let qty=0;
  const [qty, setQty] = useState(0);
  const [bg, setBg] = useState(false); // true:danger , false: white
  
  const addToCart = () => {
    // qty++
    setQty(qty + 1);
    handelTotalQty();
    // console.log(qty);
  };
  const changeBg = () => {
    setBg(!bg);
  };

  // "fff"+ fn + "ffff"
  // ''
  // `fff ${fn} fff`

  ///  bg==true ?  bg?
  ///  bg!=true ?  !bg?

  return (
    <div className="col">
      <div className={`card ${bg ? "bg-danger" : "bg-white"}`} id={id}>
        <img src={image} className="card-img-top h-50" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div>
            <button className="btn btn-primary me-3" onClick={addToCart}>
              Add To Cart
            </button>

            <a href="#" class="link-danger fw-bold text-decoration-none me-2 ">
              -
            </a>
            <span className="bg-white fs-5 text-danger  border border-danger text-bold border-2  rounded-circle d-xxl-inline-flex p-1 bd-highlight">
              {qty}
            </span>
            <a href="#" class="link-danger text-decoration-none ms-1">
              +
            </a>
          </div>
          <button className="btn btn-warning" onClick={changeBg}>
            change bg
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
