import React, { useState } from 'react'
import { SearchIcon, DeleteIcon, Filter1Icon, NotificationIcon, FavouriteIcon } from '../wrapper/Wrapper'

// оборачивает переданную картинку (лупа, колокольчик и сердечко) стилизуя под кнопку
// для лупы кнопка выключена
const StyledButton = ({children, active = false}) => {
  return (
    <button disabled={!active} className={`w-14 h-14 rounded-2xl grid place-content-center ${active ? `hover:bg-[#f0f0f0]` : ''}`}>
      {children}
    </button>
  )
}
// кнопка удаления, которая появляется при вводе, которой можно очистить поле
// по умолчанию скрыта
const DeleteButton = ({onClear, hidden = true}) => {
  return (
    <button
      disabled={hidden}
      onClick={onClear}
      className={`w-14 h-14 rounded-2xl grid place-content-center hover:bg-[#f0f0f0] ${hidden ? 'hidden' : ''}`}>
      <DeleteIcon/>
    </button>
  )
}

const Header = () => {
  // состояние поля ввода через хук useState и простые методы, к нему относящиеся
  const [search, setSearch] = useState('')
  const onSearchInput = (e) => {
    setSearch(e.target.value)
  }
  const onFormSubmit = (e) => {
    e.preventDefault()
  }
  const onClear = (e) => {
    setSearch('')
  }
  return (
    // классы Tailwind - для удобной разработки
    <header onSubmit={e => onFormSubmit(e)} className='m-5 h-14 flex'>
      <form onSubmit={e => onFormSubmit(e)} className='mr-5 h-14 rounded-2xl bg-[#f5f5f5] flex-auto flex'>
        <StyledButton>
          <SearchIcon/>
        </StyledButton>
        <input
          className='my-auto h-14 flex-auto bg-inherit focus:outline-none'
          type='text'
          name='fruit'
          placeholder='Search'
          value={search}
          onInput={(e) => onSearchInput(e)}
        />
        <DeleteButton
          hidden={search.length <= 0}
          onClear={onClear}/>
        <StyledButton active>
          <Filter1Icon/>
        </StyledButton>
      </form>
      {/* кнопки по умолчанию активны, но без прописанного функционала - лишь декорация*/}
      <StyledButton active>
        <NotificationIcon/>
      </StyledButton>
      <StyledButton active>
        <FavouriteIcon/>
      </StyledButton>
    </header>
  )
}

export default Header