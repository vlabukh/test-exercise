import React from 'react'

import Carousel from '../carousel/Carousel'

import offer1 from './1.jpg'
import offer2 from './2.jpg'
import offer3 from './3.jpg'
import offer4 from './4.jpg'

// специальные предложения разделил на два блока, так как макет для мобильного приложения
const collection1 = [
  {
    name: 'Today\'s Special',
    img: offer1
  },
  {
    name: 'Weekends Deals',
    img: offer2
  }
]
const collection2 = [
  {
    name: 'New Arrivals',
    img: offer3
  },
  {
    name: 'Black Friday',
    img: offer4
  },
]

const SpecialOffers = () => {
  return (
    <>
      <div className='mx-5 my-10 flex '>
        <h1 className='flex-auto text-3xl font-semibold'>Special Offers</h1>
        <button className='text-3xl font-semibold'>See All</button>
      </div>
      <div className='mx-5 my-10 grid grid-cols-2 gap-5'>
        {/* карусель принимает массив объектов */}
        <Carousel collection={collection1}/>
        <Carousel collection={collection2}/>
      </div>
    </>
  )
}

export default SpecialOffers