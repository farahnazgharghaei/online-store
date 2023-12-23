import { useState } from "react";
import Product from "./Product";
import { products } from "../../data";

function ProductList({ handelTotalQty }) {

  // const [products, setProducts] = useState([]);

  //fetch, axios
  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setProducts(data);
  //   })
  //   .catch((error) => console.error(error));


    

  return (
    <div className="products row row-cols-1 row-cols-md-3 row-cols-lg-4 my-5 g-4">
      {products.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          handelTotalQty={handelTotalQty}
        />
      ))}
    </div>
  );
}

export default ProductList;
