import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import './Carousel.css'

const Carousel = ({collection}) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true
      }}
      loop
      modules={[Autoplay, Pagination]}
      className='rounded-[3vw]'>
      {collection.map(item => {
        const {name, img} = item
        return (
          <SwiperSlide key={name}>
            <img className='w-max' src={img} alt={name}/>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Carousel