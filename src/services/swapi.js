import axios from 'axios';

const API_URL = 'https://swapi.dev/api/';

export const fetchCharacters = async () => {
  const response = await axios.get(`${API_URL}people/`);
  return response.data.results;
};

export const fetchFilms = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
