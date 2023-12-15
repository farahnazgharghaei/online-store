import ProductCard from "./ProductCard";
import {products} from "../../data";

function ProductList() {
 
  return (
    <div className="products row row-cols-1 row-cols-md-3 row-cols-lg-4 my-5 g-4">
      {products.map((item) => (
        <ProductCard key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} />
      ))}
      
    </div>
  );
}

export default ProductList;
