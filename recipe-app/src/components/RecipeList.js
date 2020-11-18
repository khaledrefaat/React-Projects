import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

const RecipeList = ({ recipes, recipeClicked }) => {
	const [ page, setPage ] = useState(1);

	const onRecipeClick = id => recipeClicked(id);

	const changePage = e => setPage(parseInt(e.target.innerText));

	const createPages = recipes => {
		let recipesLength = recipes.length;
		let domButtons = [];
		for (let i = 1; recipesLength >= 1; i++) {
			domButtons.push(
				<button type="button" className="btn btn-secondary" key={i}>
					{i}
				</button>
			);
			recipesLength -= 12;
		}
		return domButtons;
	};

	const recipesList = recipes.map(({ image_url, publisher, title, recipe_id }, index) => {
		let recipeCard = (
			<RecipeCard
				imageUrl={image_url}
				publisher={publisher}
				title={title}
				onRecipeClick={onRecipeClick}
				id={recipe_id}
				key={recipe_id}
			/>
		);
		if (page === 1 && index <= 11) return recipeCard;
		else if (page === 2 && index >= 12 && index < 24) return recipeCard;
		else if (page === 3 && index >= 24) return recipeCard;
		return null;
	});
	console.log(recipes);
	return (
		<div className="row recipe-list">
			{recipesList}
			{recipesList ? (
				<div className="btn-group btn-toggle" onClick={changePage}>
					{createPages(recipes)}
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default RecipeList;
