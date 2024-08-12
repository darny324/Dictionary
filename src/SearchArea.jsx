import React from 'react'
import searchIcon from '../src/assets/icons8-search.svg'

const SearchArea = ({input, onInputChange, onSearch}) => {
  return (
    <section className='mt-10'>
      <div className='
      border w-[500px] flex items-center m-auto shadow-lg text-lg pl-6 rounded-full
      h-[45px]
      '>
        <input value={input} placeholder='Search'
         className='focus:outline-none flex-1 text-gray-700' 
         onChange={onInputChange} onKeyDown={e => {
          if ( e.key === 'Enter')
            onSearch();
        }}/>
        <button className='
         px-4
         ' onClick={onSearch} >
          <img src={searchIcon} width={24} height={24}/>
        </button>
      </div>
    </section>
  )
}

export default SearchArea