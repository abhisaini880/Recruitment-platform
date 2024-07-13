import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Replace with your API URL

export const signIn = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/token`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error signing in', error);
    throw error;
  }
};

export const signUp = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/api/user`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error signing up', error);
    throw error;
  }
};
