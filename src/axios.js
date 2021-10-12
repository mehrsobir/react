import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFToken";
//axios.defaults.withCredentials = true;
const baseURL = 'http://localhost:8000';




const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		'Authorization': 'Token ' + localStorage.getItem('Token'),
        Accept: 'application/json',
		'Content-Type': 'application/json',

	},
});


export default axiosInstance;

