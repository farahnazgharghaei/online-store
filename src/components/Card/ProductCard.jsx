import React from 'react'
import "./ProductCard.css"
const ProductCard = ({id, title, image, price}) => {
  return (

      <div className="col">
        <div className="card" id={id}>
          <img
            src={image}
            className="card-img-top h-75"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {price}
            </p>
          </div>
        </div>
      </div>
 
  );
}

export default ProductCard

