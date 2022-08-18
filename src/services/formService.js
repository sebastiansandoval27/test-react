import axios from "axios";

const BASE_URL =
  "https://a5f31mt3r6.execute-api.us-east-1.amazonaws.com/TEST_API/api";

export const getUser = async (id) => {
  const result = await axios.get(BASE_URL + "/" + id);
  return result;
};
export const postUser = async (user) => {
  const result = await axios.post(BASE_URL, user);
  return result;
};
export const putUser = async (user) => {
  const result = await axios.put(`${BASE_URL}/${user.id}`, user);
  return result;
};
export const deleteUser = async (id) => {
  const result = await axios.delete(`${BASE_URL}/${id}`);
  return result;
};
