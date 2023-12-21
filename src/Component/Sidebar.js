import React, { useState } from 'react'
import './Sidebar.css'
import Logo from './Images/logo-base.jpg'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import Line from './Images/Line 1.png'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { VscTriangleRight } from "react-icons/vsc";
import { FaBox } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { TbBrandFeedly } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";


const Sidebar = () => {

  const [show, setShow] = useState(false)
  return (
    <div className='Sidebar'>

      <div className='frame1'>

        <div className='iconbar'>
          <img src= {Logo} alt='Logo' className='Logo'></img>
          <img src= {Line} alt='Line' className='Line'></img>
          <FaBarsStaggered className='fa'/>
        </div>

        <div className='home'>
        <IoHome className='io'/>
        <p className='homeword'>Home</p>
        </div>

        <div className='discover'>
           <div className='triangle'>
              <VscTriangleRight />
           </div>

          <div className='discoverone'>
            <div className='discoverfirst'>
              <IoHome className='homeyellow'/>
              <p className='discoverword'>Discover</p>
           </div>

            
           <IoIosArrowDropdownCircle className='arrow' onClick={() => (setShow(!show))}/>
          </div>

         <div className={show ? 'downdrop' : "nodropDown"}>
            <p className='pdown1'>Electronics</p>
            <p className='pdown'>Clothes</p>
            <p className='pdown'>Bags</p>
            <p className='pdown'>Food</p>
          </div>

          <div className='popular'>
            <FaBox className='box'/>
            <p className='popularword'>Popular Products</p>
          </div>

          <div className='authors'>
            <IoPeople className='people' />
            <p className='authorsword'>Top Authors</p>
          </div>

          <div className='feed'>
            <TbBrandFeedly className='feedly' />
            <p className='feedword'>Feed</p>
          </div>

          <div className='contact'>
            <RiCustomerService2Fill  className='contactly'/>
            <p className='contactword'>Contact</p>
          </div>

          <div className='setting'>
            <IoMdSettings className='settingly'/>
            <p className='settingword'>Setting</p>
          </div>

          <div className='help'>
            <IoIosHelpCircleOutline className='helply'/>
            <p className='helpword'>Help</p>
          </div>

          <div className='footer'>
            <div className='footerone'>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Help</p>
            </div>

            <div className='footertwo'>
              <p>Copyright 2022 By Ui-Lib</p>
            </div>
          </div>


        </div>





      </div>

    </div>
  )
}



export default Sidebar