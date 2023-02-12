import React from 'react';
import "./Product.css";
export default function Product(props) {
  const { product, onAdd } = props;
  return (
    
    <div className='products'>
      <div className='box'>
        <img src={product.image} alt={product.name}/>
        <br></br>
        <span>{product.name}</span>
        <br></br>
        <span>Rs.{product.price}</span>
        <br></br>
        <button onClick={() => {onAdd(product)}}>Add To Cart</button>
    </div>
    </div>
 );
}
