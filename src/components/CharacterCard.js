import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../services/swapi';

const CharacterCard = ({ name, films }) => {
  const [filmTitles, setFilmTitles] = useState([]);

  useEffect(() => {
    const getFilmTitles = async () => {
      const titles = await Promise.all(films.map(async (filmUrl) => {
        const film = await fetchFilms(filmUrl);
        return film.title;
      }));
      setFilmTitles(titles);
    };

    getFilmTitles();
  }, [films]);

  return (
    <div className="card">
      <h2>{name}</h2>
      <ul>
        {filmTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
      <style jsx>{`
        .card {
          border-radius: 30px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          padding: 20px;
          margin: 20px;
          background-color: #fff;
        }
        h2 {
          margin-bottom: 10px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default CharacterCard;
