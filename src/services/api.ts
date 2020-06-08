import axios from 'axios';

const api = axios.create({
  // recommended (adb reverse tcp:3333 tcp:3333)
  baseURL: 'http://localhost:3333',
  // alternative
  // baseURL: 'http://10.0.2.2:3333',
});

export default api;
