import React, { useEffect, useState } from "react";
import "./Product.css";

const Product = ({ id, title, image, price, handelTotalQty }) => {
  // let qty=0;
  const [qty, setQty] = useState(0);
  // const [bg, setBg] = useState(false); // true:danger , false: white
  
  const addToCart = () => {
    // qty++
    setQty(qty + 1);
    handelTotalQty();
    // console.log(qty);
  };
  // const changeBg = () => {
  //   setBg(!bg);
  // };


  // console.log("mount & update out useEffect");

  // useEffect(() => {
  //   console.log("mount & update ");
  // });

//   useEffect(() => {
//     console.log("mount");
//   }, []);

//  useEffect(() => {
//    console.log("mount & bg update");
//  }, [bg]);



  return (
    <div className="col">
      <div className={`card ${bg ? "bg-danger" : "bg-white"}`} id={id}>
        <img src={image} className="card-img-top h-50" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          {qty ? (
            <div className="w-40 qty-box bg-white shadow py-1 px-3 d-flex align-items-center justify-content-between rounded ">
              <button className="btn link-danger fw-bold text-decoration-none  fs-5 ">
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

          {/* <button className="btn btn-warning me-3" onClick={changeBg}>change Bg</button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
