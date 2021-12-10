import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

useEffect(() => {
  axios.get('https://swapi.dev/api/people')
  .then(resp => {
    setCharacters(resp.data);
  })
  .catch(() => console.error('Oops! Something went wrong...wanna try again?'))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters In Star Wars</h1>
      {characters.map(char => {
        return <Character key={char.name} data={char} />
      })
    }
    </div>
  );
}

export default App;
