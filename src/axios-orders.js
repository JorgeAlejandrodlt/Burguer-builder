import axios from 'axios';

  const instance = axios.create({
  baseURL: 'https://react-my-burger-3a61b.firebaseio.com/'
});

export default instance;