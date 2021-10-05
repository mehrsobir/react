import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
const baseURL = 'http://127.0.0.1:8000/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: 'Token ' + localStorage.getItem('Token'),
		'Content-Type': 'application/json'
	},
});

// For GET requests
axios.interceptors.request.use(
   (req) => {
      // Add configurations here
      return req;
   },
   (err) => {
      return Promise.reject(err);
   }
);

// For POST requests
axios.interceptors.response.use(
   (res) => {
      // Add configurations here
      if (res.status === 201) {
         console.log('Posted Successfully');
      }
      return res;
   },
   (err) => {
      return Promise.reject(err);
   }
);

export default axiosInstance;

