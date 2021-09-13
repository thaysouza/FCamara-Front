import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://fcamara-project-api.herokuapp.com'
      // baseUrl: 'http://localhost:5000'
    });

    this.api.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');

        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`
          };
        };
        return config;
      },
      error => { return Promise.reject(error)}
    );

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        localStorage.removeItem('token');
        throw error;
      }
    )
  };

  // Rotas de usuário
  register = async (payload) => {
    try {
      await this.api.post('/register', payload);
    } catch (error) {
      throw error;
    }
  }
  
  login = async (payload) => {
    const { email, password } = payload;
    try {
      const { data } = await this.api.post('/login', {email, password});
      const { token } = data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', data);
      return data.payload;
    } catch (error) {
      throw error;
    }
  };

  // Rotas de agendamento
  makeAppointment = async (payload) => {
    const { city, userId, date } = payload;

    try {
      const { data } = await this.api.post(`/appointment`, { city, userId, date} );
      return data;  
    } catch (error) {
      throw error;
    }
  };

  listAllAppointments = async () => {
    try {
      const { data } = await this.api.get('/listAll');
      return data;
    } catch (error) {
      throw error;
    }
  };

  listOneAppointment = async (id) => {
    try {
      const { data } = await this.api.get(`/schedules/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  };

  removeAppointment = async (id) => {
    try {
      await this.api.delete(`/schedules/delete/${id}`);
    } catch (error) {
      throw error;
    } 
  }

}



export default new Api();