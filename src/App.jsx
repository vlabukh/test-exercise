import React from 'react'

import Header from './components/header/Header'
import SpecialOffers from './components/specialOffers/SpecialOffers'
import Categories from './components/categories/Categories'
import MostPopular from './components/mostPopular/MostPopular'

function App() {
  return (
    <>
      <Header/>
      <SpecialOffers/>
      <Categories/>
      <MostPopular/>
    </>
  )
}

export default App