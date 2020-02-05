import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("key");
  return axios.create({
    headers: {
      //   "Content-Type": "application/json",
      Authorization: `Token ${token}`
    }
  });
};
