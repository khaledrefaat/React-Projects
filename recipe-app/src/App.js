import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import './base.css';

const App = () => {
	const [ term, setTerm ] = useState('pizza');
	const [ recipes, setRecipes ] = useState([]);
	useEffect(
		() => {
			Search(term);
		},
		[ term ]
	);

	// functions

	const Search = async term => {
		const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${term}`);
		const { recipes } = await response.json();
		setRecipes(recipes);
	};

	return (
		<div>
			<SearchBar onFormSubmit={term => setTerm(term)} />
			<RecipeList recipes={recipes} />
		</div>
	);
};

export default App;

// https://forkify-api.herokuapp.com/api/get?rId=35478
