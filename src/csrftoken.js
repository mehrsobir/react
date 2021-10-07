import React from 'react';
import axiosInstance from './axios';
import Cookies from 'js-cookie';
//const baseURL = 'http://localhost:8000';
//
//let _csrfToken = null;
let a = null
//async function getCsrfToken() {
//  if (_csrfToken === null) {
//    const response = await fetch(`${baseURL}/csrf/`, {
//      credentials: 'include',
//    });
//    const data = await response.json();
//    _csrfToken = data.csrfToken;
//  }
//  return _csrfToken;
//}
//var csrftoken = getCsrfToken();
//csrftoken.then( (val) => a == val );
//console.log(csrftoken)

axiosInstance.get('/csrf')
		.then((res) => {
		    a = res.data['csrfToken']
			console.log(res.data['csrfToken'])
		});

const CSRFToken = () => {
    return (
        <input type="" name="csrfmiddlewaretoken" value={a} />
    );
};
export default a;