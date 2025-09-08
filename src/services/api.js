import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8888/api/hello";

export const getMessages = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createMessage = async (text) => {
  const response = await axios.post(API_BASE_URL, { message: text });
  return response.data;
};
