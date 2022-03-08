import React, { useState, useEffect} from 'react'
import Products from "../api/products.json";
import ProductItem from './UI/ProductItem';
const Favorites = () => {

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    setProducts(Products);
  },[])
  return (
    <div  className="container mx-auto px-44">
      <h3 className="text-base font-semibold  pt-8 mb-3">Favoriler</h3>
    <div className='grid grid-cols-8 gap-[1px] rounded-lg overflow-hidden'>
    {products.length && products.map((product, index) => <ProductItem key={index} product={product} />)}
      </div>
    </div>
  )
}

export default Favorites
