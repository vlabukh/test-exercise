import React, {useState} from 'react'

import ProductCard from '../productCard/ProductCard'
import { categories } from '../categories/Categories'


import i1 from '../../assets/products/1.jpg'
import i2 from '../../assets/products/2.jpg'
import i3 from '../../assets/products/3.jpg'
import i4 from '../../assets/products/4.jpg'
import i5 from '../../assets/products/5.jpg'
import i6 from '../../assets/products/6.jpg'
import i7 from '../../assets/products/7.jpg'
import i8 from '../../assets/products/8.jpg'
import i10 from '../../assets/products/10.jpg'
import i11 from '../../assets/products/11.jpg'
import i23 from '../../assets/products/23.jpg'
import i24 from '../../assets/products/24.jpg'
import i25 from '../../assets/products/25.jpg'
import i26 from '../../assets/products/26.jpg'
import i27 from '../../assets/products/27.jpg'
import i28 from '../../assets/products/28.jpg'

const products = [
  {
    name: 'Snake Leather Bag',
    img: i1,
    category: 'Bags',
    rating: '4.5',
    sold: '8,374',
    price: '445.00'
  },
  {
    name: 'Suga Leather Shoes',
    img: i2,
    category: 'Shoes',
    rating: '4.7',
    sold: '7,483',
    price: '375.00'
  },
  {
    name: 'Black Leather Bag',
    img: i3,
    category: 'Bags',
    rating: '4.9',
    sold: '8,174',
    price: '765.00'
  },
  {
    name: 'Airtight Microphone',
    img: i4,
    category: 'Electronics',
    rating: '4.9',
    sold: '8,174',
    price: '570.00'
  },
  {
    name: 'Black Nike Shoes',
    img: i5,
    category: 'Shoes',
    rating: '4.5',
    sold: '7,758',
    price: '550.00'
  },
  {
    name: 'Fujifilm Camers',
    img: i6,
    category: 'Electronics',
    rating: '4.8',
    sold: '7,483',
    price: '890.00'
  },
  {
    name: 'Zonio Super Watch',
    img: i7,
    category: 'Watch',
    rating: '4.8',
    sold: '6,382',
    price: '850.00'
  },
  {
    name: 'Silent Headphones',
    img: i8,
    category: 'Electronics',
    rating: '4.3',
    sold: '6,937',
    price: '435.00'
  },
  {
    name: 'Venesa Long Shirt',
    img: i10,
    category: 'Clothes',
    rating: '4.8',
    sold: '9,742',
    price: '320.00'
  },
  {
    name: 'Werolla Cardigans',
    img: i11,
    category: 'Clothes',
    rating: '4.9',
    sold: '6,378',
    price: '345.00'
  },
  {
    name: 'Red Ruby Rings',
    img: i23,
    category: 'Jewelry',
    rating: '4.7',
    sold: '7,285',
    price: '960.00'
  },
  {
    name: 'Viya Blue Diamond',
    img: i24,
    category: 'Jewelry',
    rating: '4.6',
    sold: '6,378',
    price: '885.00'
  },
  {
    name: 'Slicia Silver Knife',
    img: i25,
    category: 'Kitchen',
    rating: '4.7',
    sold: '8,563',
    price: '120.00'
  },
  {
    name: 'Wood Bowl Set',
    img: i26,
    category: 'Kitchen',
    rating: '4.6',
    sold: '6,331',
    price: '130.00'
  },
  {
    name: 'Batmobile Batman',
    img: i27,
    category: 'Toys',
    rating: '4.8',
    sold: '5,377',
    price: '430.00'
  },
  {
    name: 'Mini Cutie Groot',
    img: i28,
    category: 'Toys',
    rating: '4.1',
    sold: '6,733',
    price: '395.00'
  },
]

// не стал разносить на несолько компонентов, пока способ хранения данных примитивен
const MostPopular = () => {
  const [filter, setFilter] = useState('All')
  return (
    <>
      {/* просто заголовок и кнопка, которая должна вести на отдельную страницу популярных товаров по категориям */}
      <div className='mx-5 mt-10 mb-5 flex '>
        <h1 className='flex-auto text-3xl font-semibold'>Most Popular</h1>
        <button className='text-3xl font-semibold'>See All</button>
      </div>
      {/* список категорий, рендерящийся по массиву товаров - фильтр */}
      <ul className='flex flex-wrap my-10 mx-3 gap-5'>
        <li 
          onClick={() => setFilter('All')}
          className={`cursor-pointer border-4 border-[#101010] hover:bg-[#f0f0f0] rounded-full px-5 py-2 ${filter === 'All' ? 'bg-[#101010] text-white hover:bg-[#292929]' : ''}`}>All</li>
        {categories.map(item => {
          return (
            <li
              key={item.name}
              onClick={() => setFilter(item.name)}
              className={`cursor-pointer border-4 border-[#101010] hover:bg-[#f0f0f0] rounded-full px-5 py-2 ${filter === item.name ? 'bg-[#101010] text-white hover:bg-[#292929]' : ''}`}
            >
              {item.name}
            </li>
          )
        })}
      </ul>
      {/* ну и сами товары, показывающиеся по фильтру выше */}
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 m-5'>
        {products.map(item => {
          const {name, img, category, rating, sold, price} = item
          if(filter === 'All' || filter === category) {
            return (
              <ProductCard
                key={name}
                img={img} name={name} rating={rating} sold={sold} price={price}/>
              )
          } else {
            return null
          }
        })}
        
      </div>
    </>
  )
}

export default MostPopular