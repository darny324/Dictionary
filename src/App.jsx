import { useState, useEffect } from 'react'
import './App.css'
import SearchArea from './SearchArea';
import DefinitionArea from './DefinitionArea';
import dictionary from '../src/assets/dictionary.png'

function App() {
  const [words, setWords] = useState(null);
  const [input, setInput] = useState('');

  const searchWords = async (word) => {
    if ( word.trim() !== '')
    {
      const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
      const data = await response.json();
    
      if ( response.ok )
        setWords(data);
      else 
        setWords(null);
    }
    else 
      setWords(null);
  }
  
  useEffect(() => {
    searchWords(input);
  }, []);
  
  const handleSearch = () => {
    searchWords(input);
    console.log(words);
    setInput('');
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  } 

  return (
    <div className='mb-24'>
      <header className='text-4xl font-bold flex justify-center mt-10 text-gray-500'>
        <img src={dictionary} width={50} height={50}/>
        Vocab Vault Dictionary
      </header>
      <SearchArea input={input} onInputChange={handleInputChange} onSearch={handleSearch}/>
      <br/>
      <DefinitionArea words={words} />
    </div>
  )
}

export default App
