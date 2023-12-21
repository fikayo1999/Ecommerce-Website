import React from 'react'
import './Category.css'
import { FaGreaterThan } from "react-icons/fa6";

const Category = () => {
  return (
    <div className='category'>
        <p className='allone'>All</p>
        <p className='bags'>Bags</p>
        <p className='food'> Food</p>
        <p className='books'>Books</p>
        <p className='clothes'>Clothes</p>
        <p className='grocery'>Grocery</p>
        <p className='furniture'>Furniture</p>
        <p className='baby'>Baby Care</p>
        <p className='station'>Stationery</p>
        <p className='beauty'>Beauty & Makeup</p>
        <FaGreaterThan className='greater' />
    </div>
  )
}

export default Category