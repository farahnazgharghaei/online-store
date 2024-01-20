import { useEffect, useState } from "react";
import Product from "./Product";
// import { products } from "../../data";

function ProductList({ handelTotalQty }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts()
  }, [])
  

  

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
