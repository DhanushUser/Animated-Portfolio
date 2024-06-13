import React from 'react'
import './photo.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sunset from '../../../assets/photo/sunset.jpg'
import coconut from '../../../assets/photo/coconut.jpg'
import plane from '../../../assets/photo/plane.jpg'
import mountain from '../../../assets/photo/mountain.jpg'
import mobile from '../../../assets/photo/mobile.jpg'
import sivan from '../../../assets/photo/sivan.jpg'
import tree from '../../../assets/photo/tree.jpg'
import spidy from '../../../assets/photo/spidy.jpg'
import river from '../../../assets/photo/river.jpg'
import Eee from '../../../assets/photo/ee.jpg'
import cafe from '../../../assets/photo/cafe.jpg'
import bee from '../../../assets/photo/bee.jpg'
import coin from '../../../assets/photo/coin.jpg'
import creative_1 from '../../../assets/photo/creative-1.jpg'
import creative_2 from '../../../assets/photo/creative-2.jpg'





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



const Photography = () => {



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className='photography'>
        <div className='flex justify-center items-center mt-[20vh]'>
          <h2 className='text-2xl mb-[100px] font-[500]'>Mobile <span className='font-[500] p-1 rounded'>Shots</span></h2>
        </div>

    <div className="slider-container mx-[70px]">

      <Slider {...settings}>
             <div>
                <img src={sunset} alt="" />
             </div>
             <div>
                <img src={plane} alt="" />
             </div>
             <div>
                <img src={spidy} alt="" />
             </div>
             <div>
                <img src={coconut} alt="" />
             </div>
             <div>
                <img src={mountain} alt="" />
             </div>
             <div>
                <img src={tree} alt="" />
             </div>
             <div>
                <img src={mobile} alt="" />
             </div>
             <div>
                <img src={sivan} alt="" />
             </div>
             <div>
                <img src={river} alt="" />
             </div>
             <div>
                <img src={Eee} alt="" />
             </div>
             <div>
                <img src={creative_1} alt="" />
             </div>
             <div>
                <img src={creative_2} alt="" />
             </div>
             <div>
                <img src={cafe} alt="" />
             </div>
             <div>
                <img src={bee} alt="" />
             </div>
             <div>
                <img src={coin} alt="" />
             </div>
      </Slider>
    </div>
    </div>
  )
}

export default Photography;