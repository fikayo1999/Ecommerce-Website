import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import Image1 from './image1/Image.jpg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='search'>
            <div className='searchone'>
                <CiSearch  className='searchicon'/>
                <p className='searchword'>Search</p>
            </div>
            <CiMicrophoneOn className='microphone' />
        </div>

        <div className='icons'>
           <IoIosMoon className='moon'/>
           <FaBell className='bell' />
           <FaBagShopping className='shopping'/>
           <p className='seller'> Become a seller</p>
           <img src= {Image1} alt='image' className='image1'></img>
        </div>
    </div>
  )
}

export default Navbar