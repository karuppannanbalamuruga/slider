import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, navigation} from 'swiper/modules';
import './Banner.css';



const Banner = () => {
return (
<section>
  <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={
    {
      rotate:0,
      stretch:0,
      depth:100,
      modifier:1
    }
  }
  pagination={true}
  modules={[EffectCoverflow, Pagination]}
  
  >
    <SwiperSlide className='slider1'>
      <img src={require('../assets/service14.png')}/>
    </SwiperSlide>
    <SwiperSlide className='slider2'>
      <img src={require('../assets/service15.png')}/>
    </SwiperSlide>
    <SwiperSlide className='slider3'>
      <img src={require('../assets/service16.png')}/>
    </SwiperSlide>
    <SwiperSlide className='slider4'>
      <img src={require('../assets/service14.png')}/>
    </SwiperSlide>
    <SwiperSlide className='slider5'>
      <img src={require('../assets/service15.png')}/>
    </SwiperSlide>
  </Swiper>
</section>
  )
}

export default Banner

