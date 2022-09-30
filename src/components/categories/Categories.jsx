import React from 'react'

import clothes from './clothes.png'
import shoes from './shoes.png'
import bags from './bags.png'
import electronics from './electronics.png'
import watch from './watch.png'
import jewelry from './jewelry.png'
import kitchen from './kitchen.png'
import toys from './toys.png'

// Нажатие на категорию должно вести на соответствующие страницы списков товаров - на будущее
export const categories = [
  {
    name: 'Clothes',
    img: clothes,
    src: '/clothes'
  },
  {
    name: 'Shoes',
    img: shoes,
    src: '/shoeses'
  },
  {
    name: 'Bags',
    img: bags,
    src: '/bags'
  },
  {
    name: 'Electronics',
    img: electronics,
    src: '/electronics'
  },
  {
    name: 'Watch',
    img: watch,
    src: '/watch'
  },
  {
    name: 'Jewelry',
    img: jewelry,
    src: '/jewelry'
  },
  {
    name: 'Kitchen',
    img: kitchen,
    src: '/kitchen'
  },
  {
    name: 'Toys',
    img: toys,
    src: '/toys'
  }
]

const Categories = () => {
  return (
    // для широкого экрана 8 категорий в ряд, а для узкого - по 4 в 2 ряда
    <div className='grid lg:grid-cols-8 grid-cols-4 gap-4 justify-items-center my-10'>
      {categories.map(item => {
        const {name, img} = item
        return (
          <div key={name} className='grid justify-items-center'>
            <button className='bg-[#ececec] hover:bg-[#cfcfcf] p-8 rounded-full place-content-center' key={name}>
              <img width={32} src={img} alt={name}/>
            </button>
            <p className='relative'>{name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Categories