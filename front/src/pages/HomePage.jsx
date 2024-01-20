import React from "react";
import ProductList from "../components/Product";

const HomePage = ({ handelTotalQty }) => {
  return (
    <div className="container">
      <ProductList handelTotalQty={handelTotalQty} />
    </div>
  );
};

export default HomePage;
