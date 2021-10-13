import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/admin/posts';
import axiosInstance from './axios';

function Admin() {
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
		});
	}, [setAppState]);

	return (
		<div className="App">
			{ appState.loading ? <h2>"Интизор бошед!"</h2> : <Posts posts = {appState.posts} />}
		</div>
	);
}
export default Admin;
