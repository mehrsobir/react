import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/posts/posts';
import PostLoadingComponent from './components/posts/postLoading';
import axiosInstance from './axios';
import 'fontsource-roboto'


function App() {
	const PostLoading = PostLoadingComponent(Posts);
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
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}

export default App;
