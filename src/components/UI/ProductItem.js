import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const ProductItem = ({ product }) => {
  return (
    <div className='bg-white flex flex-col gap-y-1 p-3 items-center text-center'>
       <button className='w-8 h-8 ml-16 border shadow-md rounded-lg border-gray-200 text-purple-700 transition-colors bg-white hover:bg-purple-50 flex items-center justify-center'>
           <AiOutlinePlus />
       </button>
        <img src={product.image} alt={product.title}/>
        <div className='text-sm font-semibold text-brand-color'>₺{product.price}</div>
        <div className='text-sm font-semibold text-gray-900'>{product.title}</div>
        <div className='text-gray-500'>{product.alt}</div>
    </div>
  )
}

export default ProductItem