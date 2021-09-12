import axios from 'axios';

const API_URL = 'http://localhost:5000/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'cadastro', {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + 'login', {
      email,
      password,
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem('usuario', JSON.stringify(res.data));
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem('usuario');
};

const getUserAppointments = () => {
  return JSON.parse(localStorage.getItem('usuario'));
};

export default { register, login, logout, getUserAppointments };
