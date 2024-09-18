import React from 'react'
import './intern.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import image_1 from '../../assets/photo/cafe.jpg'
// import image_2 from '../../assets/photo/coin.jpg'
// import image_3 from '../../assets/photo/ee.jpg'

const Intern = () => {
  return (
    <div className='intern'>
        <div className="flex justify-center mb-20 ">
            <h1 className="text-3xl font-[600] mb-[50px]">Intern<span className="span p-2 rounded ml-1">Ships</span></h1>
        </div>


        <div className="i-1 flex gap-5">
            <div className="i-1-left ml-[20vw]">
                <Swiper
                    // modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        2
                    </SwiperSlide>
                    <SwiperSlide>
                        3
                    </SwiperSlide>
                
                
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Intern