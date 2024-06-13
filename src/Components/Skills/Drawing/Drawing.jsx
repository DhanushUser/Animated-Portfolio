import React from 'react'
import './drawing.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from '../../../assets/1.jpg'
import two from '../../../assets/2.jpg'
import three from '../../../assets/3.jpeg'
import four from '../../../assets/4.jpeg'
import five from '../../../assets/5.jpg'
import six from '../../../assets/6.jpg'
import seven from '../../../assets/6.jpg'




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:'50%', }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:'50%', }}
      onClick={onClick}
    />
  );
}

const Drawing = () => {


  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    

  

  return (
    <div className='drawing '>
      <div className='flex justify-center items-center mt-[30vh]'>
        <h2 className='text-2xl mb-[100px] font-[500]'>Portrait <span className='font-[500] p-1 rounded'>Drawings</span></h2>
      </div>

      <div className="slider-container mx-[70px]">
      <Slider {...settings}>
        <div>
          <img src={one} alt="" />
        </div>
        <div>
          <img src={two} alt="" />
        </div>
        <div>
          <img src={three} alt="" />
        </div>
        <div>
          <img src={four} alt="" />
        </div>
        <div>
          <img src={five} alt="" />
        </div>
        <div>
          <img src={six} alt="" />
        </div>
        <div>
          <img src={seven} alt="" />
        </div>
        
      </Slider>
    </div>

    </div>
  )
}

export default Drawing