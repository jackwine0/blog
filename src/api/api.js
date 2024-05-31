import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const getPost = async (id) => {
  const response = await axios.get(`${API_URL}/posts/${id}`);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post(`${API_URL}/posts`, post);
  return response.data;
};

export const updatePost = async (id, post) => {
  const response = await axios.put(`${API_URL}/posts/${id}`, post);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${API_URL}/posts/${id}`);
  return response.data;
};
