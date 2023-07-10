import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.kommunity.com/api/v2',
});

export default axios;
