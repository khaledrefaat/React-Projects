import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import './base.css';

const App = () => {
	const [ term, setTerm ] = useState('pizza');

	useEffect(
		() => {
			Search(term);
		},
		[ term ]
	);

	// functions

	const Search = async term => {
		const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${term}`);
		const data = await response.json();
		console.log(data);
	};

	return (
		<div>
			<SearchBar onFormSubmit={term => setTerm(term)} />
		</div>
	);
};

export default App;

// https://forkify-api.herokuapp.com/api/get?rId=35478
