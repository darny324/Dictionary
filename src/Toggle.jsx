import React, { useRef, useState } from 'react'
import lightIcon from './assets/light_mode.png'
import nightIcon from './assets/night_mode.png'

const Toggle = ({theme, setTheme}) => {
  const [isChecked, setIsChecked] = useState(false);
  if ( isChecked )
  {
    setTheme('dark');
  }
  else 
    setTheme('light');
  return (
    <div className='absolute  right-3 -top-6'>
      <div onClick={(e) => {
        e.preventDefault();
        setIsChecked(!isChecked);
      }} className={`w-[60px] h-[30px] bg-[#d8cdcd] relative rounded-md cursor-pointer`}>
        <input 
        type='checkbox' 
        className='opacity-0 absolute check-box pointer-events-none' 
        checked={isChecked}/>

        <img src={lightIcon} width={22} height={22} className='pointer-events-none left-1 bottom-1 absolute'/>
        <img src={nightIcon} width={22} height={22} className='pointer-events-none right-1 bottom-1 absolute'/>
        <span className={`
          w-6 h-6 rounded-md bg-white opacity-75 absolute left-1 bottom-[3px] 
           duration-[400ms]
           ${isChecked ? 'translate-x-[27px]' : ''}
          `}></span>
        
      </div>
    </div>
  )
}

export default Toggle