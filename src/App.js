import React, { useEffect, useState } from 'react';
import { fetchCharacters } from './services/swapi';
import CharacterCard from './components/CharacterCard';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const characters = await fetchCharacters();
      setCharacters(characters);
    };

    getCharacters();
  }, []);

  return (
    <div className="container">
      {characters.map((character, index) => (
        <CharacterCard key={index} name={character.name} films={character.films} />
      ))}
    </div>
  );
};

export default App;
