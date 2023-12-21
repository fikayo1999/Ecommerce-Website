import React from 'react'
import Navbar from './Navbar'
import './Mainpage.css'
import Header from './Header'
import Category from './Category'
import Product1 from '../Product/Product1'

const Mainpage = () => {
  return (
    <div className='main'>
        <Navbar/>
        <Header/>
        <Category/>
        <Product1/>
    </div>
  )
}

export default Mainpage