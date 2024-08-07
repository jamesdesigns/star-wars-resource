import React, { useState } from 'react';
import { fetchCategory } from './services/swapi';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');

  const handleFetch = async (category) => {
    const results = await fetchCategory(category);
    setData(results);
    setCategory(category);
  };

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => handleFetch('people')}>People</button>
        <button onClick={() => handleFetch('films')}>Films</button>
        <button onClick={() => handleFetch('starships')}>Starships</button>
        <button onClick={() => handleFetch('vehicles')}>Vehicles</button>
        <button onClick={() => handleFetch('species')}>Species</button>
        <button onClick={() => handleFetch('planets')}>Planets</button>
      </div>
      <div className="results">
        {data.map((item, index) => (
          <div key={index} className="card">
            {category === 'people' && <h2>{item.name}</h2>}
            {category === 'films' && <h2>{item.title}</h2>}
            {category === 'starships' && <h2>{item.name}</h2>}
            {category === 'vehicles' && <h2>{item.name}</h2>}
            {category === 'species' && <h2>{item.name}</h2>}
            {category === 'planets' && <h2>{item.name}</h2>}
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
        }
        .buttons {
          margin-bottom: 20px;
        }
        button {
          margin: 5px;
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .results {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .card {
          border-radius: 30px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          padding: 20px;
          margin: 20px;
          background-color: #fff;
          width: 200px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default App;
