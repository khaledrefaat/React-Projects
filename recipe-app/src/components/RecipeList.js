import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

const recipePerPage = 12;

const RecipeList = ({ recipes, recipeClicked }) => {
	const [ page, setPage ] = useState(1);

	useEffect(
		() => {
			setPage(1);
		},
		[ recipes ]
	);

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
			recipesLength -= recipePerPage;
		}
		return domButtons;
	};

	const recipesList = recipes.map(({ image_url, publisher, title, recipe_id }, index) => {
		// render 12 recipes per page
		if ((index > (page - 1) * recipePerPage && index < page * recipePerPage) || index === 0) {
			return (
				<RecipeCard
					imageUrl={image_url}
					publisher={publisher}
					title={title}
					onRecipeClick={onRecipeClick}
					id={recipe_id}
					key={recipe_id}
				/>
			);
		}
		return null;
	});
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
