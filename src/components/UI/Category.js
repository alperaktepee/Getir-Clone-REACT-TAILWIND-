import React from 'react'

const Category = ({category:{id,title,image}}) => {
  return (
    <div>
        <a href='#' className=' gap-y-2 flex flex-col items-center text-center p-4 transition hover:bg-purple-100 '>
            <img src={image} alt={title} className='w-12 h-12 rounded-lg border-2'/>
        <span className='text-sm font-semibold text-gray-700 whitespace-nowrap'>{title}</span>
        </a>
    </div>
  )
}

export default Category
