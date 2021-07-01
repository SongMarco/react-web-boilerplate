import axios from '../../utils/axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const UserAPI = {
  login: async (loginId: string, password: string) => {
    // axios.defaults.baseURL;
    const { data: loginRes } = await axios.post('/auth/login', {
      username: loginId,
      password,
    });
    console.log('-> loginRes', loginRes);

    return loginRes;

    // return new Promise(async (resolve, reject) => {
    //   try {
    //
    //     const loginRes = await axios.post('/users/login', {loginId, password});
    //     console.log('-> loginRes', loginRes);
    //
    //     // setAdminUser(data);
    //     // resolve(data);
    //   } catch (error) {
    //     console.log('signIn error', error);
    //     reject(error);
    //   }
    // });
  },

  // check login
  getProfile: async () => {
    const { data: loginRes } = await axios.get('/users/profile');
    // console.log('-> loginRes', loginRes);

    return loginRes;
  },
};

export default UserAPI;