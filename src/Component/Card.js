import React from 'react'
import ProductItem from './ProductItem';

function Card(pro) {
    console.log(pro.children);
  return (
    <div className=" bg-yellow-600 w-[400px] rounded-md text-white">
       {pro.children}
    </div>
  )
}

export default Card