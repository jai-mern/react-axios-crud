import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const editUser = async (userId, updatedUser) => {
  const response = await axios.put(`${API_URL}/${userId}`, updatedUser);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(`${API_URL}/${userId}`);
  return response.data;
};
