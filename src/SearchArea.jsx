import React from 'react'
import searchIcon from '../src/assets/icons8-search.svg'

const SearchArea = ({theme, input, onInputChange, onSearch}) => {
  return (
    <section className='mt-10'>
      <div className={`
        w-[500px] flex items-center m-auto text-lg pl-6 rounded-full
      h-[45px] ${theme === 'light' ? 'shadow-lg' : 'shadow-gray-500 shadow-sm'}
        `}>
        <input value={input} placeholder='Search'
         className={`focus:outline-none flex-1 text-gray-700 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`} 
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