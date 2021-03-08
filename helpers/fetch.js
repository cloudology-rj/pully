import axios from 'axios';

// axios.defaults.baseURL = 'http://127.0.0.1:8000/rest/v1';
axios.defaults.baseURL = 'http://46.137.198.87/rest/v1';




const apiCall = async (url, method, token, data) => {
  const headersFresh = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  };

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  };

  const response = await axios({
    url: `${url}`,
    method: `${method}`,
    headers: token != '' ? headers : headersFresh,
    data: data
  })

  return response.data;
};

export default apiCall;
