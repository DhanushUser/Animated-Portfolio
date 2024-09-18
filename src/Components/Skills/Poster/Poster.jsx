import React from 'react'
import post_1 from '../../../assets/pizza.png'
import post_2 from '../../../assets/food-1.jpg'
import post_3 from '../../../assets/dosa.jpg'
import post_4 from '../../../assets/dawan.png'
import post_5 from '../../../assets/hope.jpg'
import post_6 from '../../../assets/food-2.png'
import post_7 from '../../../assets/burger.jpg'
import post_8 from '../../../assets/home.png'
import post_9 from '../../../assets/photo.png'
import post_10 from '../../../assets/shoe.jpg'
import post_11 from '../../../assets/singer.png'
import post_12 from '../../../assets/dress.png'
import post_13 from '../../../assets/gym-1.png'
import post_14 from '../../../assets/gym-2.png'
import Slider from 'react-slick';
import './poster.css'
import { useNavigate } from 'react-router-dom'





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

const Poster = () => {

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

  const navigate = useNavigate();

    const handleBack = ()=>{
      navigate(-1);
    }


  
  return (
    <div className='poster' >
        <div className='flex justify-center items-center mt-[18vh]'>
          <h2 className='text-2xl mb-[100px] font-[500]'>Poster <span className='font-[500] p-1 rounded'>Designing</span></h2>
        </div>

        <div className="arrow">
        <button onClick={handleBack}><i class='bx bx-left-arrow-alt'></i></button>
      </div>

        <div className="slider-container mx-[70px]">
            <Slider {...settings}>
              <div>
                <img src={post_1} alt="" />
              </div>
              <div>
                <img src={post_2} alt="" />
              </div>
              <div>
                <img src={post_3} alt="" />
              </div>
              <div>
                <img src={post_4} alt="" />
              </div>
              <div>
                <img src={post_5} alt="" />
              </div>
              <div>
                <img src={post_6} alt="" />
              </div>
              <div>
                <img src={post_7} alt="" />
              </div>
              <div>
                <img src={post_8} alt="" />
              </div>
              <div>
                <img src={post_9} alt="" />
              </div>
              <div>
                <img src={post_10} alt="" />
              </div>
              <div>
                <img src={post_11} alt="" />
              </div>
              <div>
                <img src={post_12} alt="" />
              </div>
              <div>
                <img src={post_12} alt="" />
              </div>
              <div>
                <img src={post_13} alt="" />
              </div>
              <div>
                <img src={post_14} alt="" />
              </div>

            </Slider>
    </div>
        
    </div>
  )
}

export default Poster