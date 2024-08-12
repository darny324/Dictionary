import React from 'react'
import grayCircle from '../src/assets/gray_circle.png'
import blueCircle from '../src/assets/blue_circle2.png'

const DefinitionArea = ({words}) => {
  const wordLogo = (
    <div className='text-gray-500 w-6 h-6 rounded-full border text-sm text-center mr-2'>en</div>
  );
  return (
    <div className=' mx-56 mt-10'>
      <p className='text-3xl font-semibold flex items-center mb-6'>
        { words !== null ? <>{wordLogo} {words[0].word}</> : ''}
      </p>
      <div className='text-lg'>
        {
          words !== null ? 
          words.map((w, i) => {
            return (
              <div key={i}>
                <ul className='ml-20'>
                  {
                    w.meanings.map((meaning, index) => {
                      return (
                        <li className='mb-4' key={index}>
                          <img className='inline-block mr-4' src={grayCircle} width={16} height={16}/>
                          <h3 className='text-gray-500 text-xl inline-block'>({meaning.partOfSpeech})</h3>
                          <ul className='ml-20 list-blue-circle'>
                            {
                              meaning.definitions.map((def) => {
                                return <li key={def.definition}>
                                  
                                  {def.definition}
                                  </li>
                              })
                            }
                          </ul>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            );
          })
          : 
          <p className='text-2xl font-bold text-center'>
            No Definition Found
          </p>
        }
      </div>
    </div>
  )
}

export default DefinitionArea