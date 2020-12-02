import axios from "axios";
import {registerApi, userApi} from "./adminApi";
import getUserInfo from '../services/auth-header';
import authHeader from "../services/auth-header";

const register = (name, email, password) => {
  return axios.post(registerApi.post, {
    name,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(userApi.post, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }

      return response.data;
    })
};

const logout = () => {
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return axios.get(userApi.get, { headers: authHeader() });
  //return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};