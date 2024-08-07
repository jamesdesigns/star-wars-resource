import axios from 'axios';

const API_URL = 'https://swapi.dev/api/';

export const fetchCategory = async (category) => {
  const response = await axios.get(`${API_URL}${category}/`);
  return response.data.results;
};
