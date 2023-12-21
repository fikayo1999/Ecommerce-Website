import React from 'react'
import './Product1.css'
import Laptop from './Productimages/laptop.png'
import { IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Image1 from './Productimages/Image.jpg'
import Drone from './Productimages/drone.png'
import Game from './Productimages/gamepad.png'
import Airpods from './Productimages/airpods.png'
import Camera from './Productimages/camera.png'
import Desktop from './Productimages/desktop.png'
import Handler from './Productimages/handler.png'
import Airphones from './Productimages/airphones.png'
import Phones from './Productimages/phones.png'

const product = [
    
]

const Product1 = () => {
  return (
  <div className='allproduct'>

   <div className='row'>

    <div className='productfirst'>
        <img src={Laptop} alt='laptop' className='laptop'></img>
        <div className='like'>
            <FaHeart  className='heart'/>
            <FaLayerGroup  className='layer'/>
        </div>

        <div className='laptopprice'>
            <img src= {Image1} alt='image1' className='image1'></img>
          <div className='laptopprice2'>
            <div className='firstprice'>
                <p className='macbook'>MacBook Pro 13” Big Discount</p>
                <p className='eshop'>Eshop Spot</p>
            </div>

            <div className='secondprice'>

              <div className='allprice'>

                <div className='price'>
                    <p className='onethousand'>$1,999.00</p>
                    <p className='twothousand'>$1,999.00</p>
                </div>

                <div className='price2'>
                    <p className='sales'>15 sales</p>
                    <IoMdStar className='star'/>
                    <p className='number'>5.0(10)</p>
                </div>
             </div>

              <div>
                <FaCartPlus className='cart'/>
                </div>
            </div>
          </div>  
        </div>
    </div>

    <div className='productfirst1'>
        <img src={Drone} alt='laptop' className='laptop'></img>
        <div className='like'>
            <FaHeart  className='heart'/>
            <FaLayerGroup  className='layer'/>
        </div>

        <div className='laptoppriceone'>
            <img src= {Image1} alt='image1' className='image1'></img>
          <div className='laptopprice2'>
            <div className='firstprice'>
                <p className='macbook'>Joystick Game Controller</p>
                <p className='eshop'>Eshop Spot</p>
            </div>

            <div className='secondprice'>

              <div className='allprice'>

                <div className='price'>
                    <p className='onethousand'>$1,999.00</p>
                    <p className='twothousand'>$1,999.00</p>
                </div>

                <div className='price2'>
                    <p className='sales'>15 sales</p>
                    <IoMdStar className='star'/>
                    <p className='number'>5.0(10)</p>
                </div>
             </div>

              <div>
                <FaCartPlus className='cart'/>
                </div>
            </div>
          </div>  
        </div>
    </div>

    <div className='productfirst'>
        <img src={Game} alt='laptop' className='laptop'></img>
        <div className='like'>
            <FaHeart  className='heart'/>
            <FaLayerGroup  className='layer'/>
        </div>

        <div className='laptopprice'>
            <img src= {Image1} alt='image1' className='image1'></img>
          <div className='laptopprice2'>
            <div className='firstprice'>
                <p className='macbook'>Mavic Air Phantom 4 pro</p>
                <p className='eshop'>Eshop Spot</p>
            </div>

            <div className='secondprice'>

              <div className='allprice'>

                <div className='price'>
                    <p className='onethousand'>$1,999.00</p>
                    <p className='twothousand'>$1,999.00</p>
                </div>

                <div className='price2'>
                    <p className='sales'>15 sales</p>
                    <IoMdStar className='star'/>
                    <p className='number'>5.0(10)</p>
                </div>
             </div>

              <div>
                <FaCartPlus className='cart'/>
                </div>
            </div>
          </div>  
        </div>
    </div>

  </div>

  <div className='row1'>

<div className='productfirst'>
    <img src={Camera} alt='laptop' className='laptop'></img>
    <div className='like'>
        <FaHeart  className='heart'/>
        <FaLayerGroup  className='layer'/>
    </div>

    <div className='laptopprice'>
        <img src= {Image1} alt='image1' className='image1'></img>
      <div className='laptopprice2'>
        <div className='firstprice'>
            <p className='macbook'>Nikon D7500 20.9 Mp Touchscreen</p>
            <p className='eshop'>Eshop Spot</p>
        </div>

        <div className='secondprice'>

          <div className='allprice'>

            <div className='price'>
                <p className='onethousand'>$1,999.00</p>
                <p className='twothousand'>$1,999.00</p>
            </div>

            <div className='price2'>
                <p className='sales'>15 sales</p>
                <IoMdStar className='star'/>
                <p className='number'>5.0(10)</p>
            </div>
         </div>

          <div>
            <FaCartPlus className='cart'/>
            </div>
        </div>
      </div>  
    </div>
</div>

<div className='productfirst'>
    <img src={Airpods} alt='laptop' className='laptop'></img>
    <div className='like'>
        <FaHeart  className='heart'/>
        <FaLayerGroup  className='layer'/>
    </div>

    <div className='laptopprice'>
        <img src= {Image1} alt='image1' className='image1'></img>
      <div className='laptopprice2'>
        <div className='firstprice'>
            <p className='macbook'>Apple Airpods Pro White</p>
            <p className='eshop'>Eshop Spot</p>
        </div>

        <div className='secondprice'>

          <div className='allprice'>

            <div className='price'>
                <p className='onethousand'>$1,999.00</p>
                <p className='twothousand'>$1,999.00</p>
            </div>

            <div className='price2'>
                <p className='sales'>15 sales</p>
                <IoMdStar className='star'/>
                <p className='number'>5.0(10)</p>
            </div>
         </div>

          <div>
            <FaCartPlus className='cart'/>
            </div>
        </div>
      </div>  
    </div>
</div>

<div className='productfirst'>
    <img src={Desktop} alt='laptop' className='laptop'></img>
    <div className='like'>
        <FaHeart  className='heart'/>
        <FaLayerGroup  className='layer'/>
    </div>

    <div className='laptopprice'>
        <img src= {Image1} alt='image1' className='image1'></img>
      <div className='laptopprice2'>
        <div className='firstprice'>
            <p className='macbook'>Apple iMac Retina 5K 27"</p>
            <p className='eshop'>Eshop Spot</p>
        </div>

        <div className='secondprice'>

          <div className='allprice'>

            <div className='price'>
                <p className='onethousand'>$1,999.00</p>
                <p className='twothousand'>$1,999.00</p>
            </div>

            <div className='price2'>
                <p className='sales'>15 sales</p>
                <IoMdStar className='star'/>
                <p className='number'>5.0(10)</p>
            </div>
         </div>

          <div>
            <FaCartPlus className='cart'/>
            </div>
        </div>
      </div>  
    </div>
</div>

</div>

<div className='row2'>

<div className='productfirst2'>
    <img src={Phones} alt='laptop' className='laptop'></img>
    <div className='like'>
        <FaHeart  className='heart'/>
        <FaLayerGroup  className='layer'/>
    </div>

    <div className='laptoppricetwo'>
        <img src= {Image1} alt='image1' className='image1'></img>
      <div className='laptopprice2'>
        <div className='firstprice'>
            <p className='macbook'>Apple iPhone X 256GB 3GB RAM</p>
            <p className='eshop'>Eshop Spot</p>
        </div>

        <div className='secondprice'>

          <div className='allprice'>

            <div className='price'>
                <p className='onethousand'>$1,999.00</p>
                <p className='twothousand'>$1,999.00</p>
            </div>

            <div className='price2'>
                <p className='sales'>15 sales</p>
                <IoMdStar className='star'/>
                <p className='number'>5.0(10)</p>
            </div>
         </div>

          <div>
            <FaCartPlus className='cart'/>
            </div>
        </div>
      </div>  
    </div>
</div>

<div className='productfirst'>
    <img src={Airphones} alt='laptop' className='laptop'></img>
    <div className='like'>
        <FaHeart  className='heart'/>
        <FaLayerGroup  className='layer'/>
    </div>

    <div className='laptopprice'>
        <img src= {Image1} alt='image1' className='image1'></img>
      <div className='laptopprice2'>
        <div className='firstprice'>
            <p className='macbook'>BEATS SOLO PRO 1 Wireless Headphone</p>
            <p className='eshop'>Eshop Spot</p>
        </div>

        <div className='secondprice'>

          <div className='allprice'>

            <div className='price'>
                <p className='onethousand'>$1,999.00</p>
                <p className='twothousand'>$1,999.00</p>
            </div>

            <div className='price2'>
                <p className='sales'>15 sales</p>
                <IoMdStar className='star'/>
                <p className='number'>5.0(10)</p>
            </div>
         </div>

          <div>
            <FaCartPlus className='cart'/>
            </div>
        </div>
      </div>  
    </div>
</div>

<div className='productfirst'>
    <img src={Handler} alt='laptop' className='laptop'></img>
    <div className='like'>
        <FaHeart  className='heart'/>
        <FaLayerGroup  className='layer'/>
    </div>

    <div className='laptopprice'>
        <img src= {Image1} alt='image1' className='image1'></img>
      <div className='laptopprice2'>
        <div className='firstprice'>
            <p className='macbook'>TP-Link Archer AX53 AX3000 Dual Band</p>
            <p className='eshop'>Eshop Spot</p>
        </div>

        <div className='secondprice'>

          <div className='allprice'>

            <div className='price'>
                <p className='onethousand'>$1,999.00</p>
                <p className='twothousand'>$1,999.00</p>
            </div>

            <div className='price2'>
                <p className='sales'>15 sales</p>
                <IoMdStar className='star'/>
                <p className='number'>5.0(10)</p>
            </div>
         </div>

          <div>
            <FaCartPlus className='cart'/>
            </div>
        </div>
      </div>  
    </div>
</div>

</div>
      <p className='load'>Load more</p>
  </div>
  
  )
}

export default Product1