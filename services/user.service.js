import axios from "axios";
import authHeader from "./auth-header";
import {userApi} from "./adminApi";

// TODO : create other boards

const API_URL = "http://localhost:8888/api-rest";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserInfo = () => {
  return axios.get(userApi.get, { headers: authHeader() });
};

const getUserBoard = () => {
  console.log("authHeaders", authHeader())
  return axios.get(userApi.get, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};



export default {
  getPublicContent,
  getUserInfo,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};