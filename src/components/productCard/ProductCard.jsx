import React from 'react'

import star from '../../assets/icons/star.png'

const ProductCard = (props) => {
  const {img, name, rating, sold, price} = props
  return(
    <div>
      <img className='w-full rounded-[4vw]' src={img} alt={name} />
      <p className='font-semibold text-4xl mt-5'>{name}</p>
      <div className='flex items-center mt-2'>
        <img className='w-8 m-3' src={star} alt='star' />
        <p className='text-xl mx-3 text-[#616161]'>{rating}</p>
        <p className='text-xl mx-3 text-[#616161]'>|</p>
        <p className='mx-3 text-[#35383f] bg-[#ececec] py-2 px-3 rounded-lg font-semibold'>{sold} sold</p>
      </div>
      <div className='flex items-center'>
        <p className='flex-auto font-semibold text-4xl m-2'>${price}</p>
        <button className='py-2 px-4 m-4 text-[#ececec] bg-[#171717] rounded-lg font-semibold'>buy</button>
      </div>
    </div>
  )
}

export default ProductCard