import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostLoadingComponent from './components/PostLoading';

import 'fontsource-roboto'

function App() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
	}, [setAppState]);
	return (
		<div className="App">
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default App;
