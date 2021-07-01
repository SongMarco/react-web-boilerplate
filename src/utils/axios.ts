import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL, timeout: 10000,
});
// axios.interceptors.request.use(function(config) {
//   // Do something before request is sent
//   // config.withCredentials = true;
//   return config;
// }, function(error) {
//   // Do something with request error
//   return Promise.reject(error);
// });
export default instance;

instance.interceptors.request.use(function(config) {

  const accessToken = cookies.get('accessToken');
  console.log('-> accessToken', accessToken);

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

instance.interceptors.response.use((response) => response, async (error) => {
  if (error.response) {

    // go to login page when receive 401 error
    switch (error.response.status) {
      case 401:
        window.location.href = '/login';
        break;
    }
  } else if (error.request) {
    console.log(error.request);
    alert('Bad connection error. please check your internet');
  } else {
    console.log('Error', error.message);
  }
  delete error.config.data;
  throw error;
});