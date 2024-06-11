import axios from 'axios';

export const herokuApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  herokuApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  herokuApi.defaults.headers.common.Authorization = ``;
};
