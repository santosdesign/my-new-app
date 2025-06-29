import axios from 'axios';

const API_BASE_URL = 'https://api.relive.com';

export const fetchUserData = async (userId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch user data');
  }
};
