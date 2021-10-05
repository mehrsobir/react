import React, {useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
	const history = useHistory();

	useEffect(() => {
		localStorage.removeItem('Token');
		axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/login');
	});
	return <div>Logout</div>;
}