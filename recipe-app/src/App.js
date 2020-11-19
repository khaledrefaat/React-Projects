import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import './base.css';

const App = () => {
	const [ term, setTerm ] = useState('');
	const [ recipes, setRecipes ] = useState([]);
	const [ recipeId, setRecipeId ] = useState(null);
	const [ selectedRecipe, setSelectedRecipe ] = useState(null);

	useEffect(
		() => {
			if (term) Search(term);
		},
		[ term ]
	);

	useEffect(
		() => {
			if (recipeId) recipe(recipeId);
		},
		[ recipeId ]
	);

	const Search = async term => {
		const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${term}`);
		const { recipes } = await response.json();
		setRecipes(recipes);
	};

	const recipe = async recipeId => {
		const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
		const { recipe } = await response.json();
		setSelectedRecipe(recipe);
	};

	const onRecipeCLick = id => {
		setRecipeId(id);
	};

	return (
		<div className="container">
			<SearchBar onFormSubmit={term => setTerm(term)} />
			<div className="row">
				<div className="col-sm-8">
					{recipes ? <RecipeList recipes={recipes} recipeClicked={onRecipeCLick} /> : ''}
				</div>
				<div className="col-sm-4">
					<RecipeDetail selectedRecipe={selectedRecipe} />
				</div>
			</div>
		</div>
	);
};

export default App;
