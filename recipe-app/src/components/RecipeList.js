import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
	const recipesList = recipes.map(({ image_url, publisher, title }) => {
		return <RecipeCard imageUrl={image_url} publisher={publisher} title={title} />;
	});
	return <div className="row">{recipesList}</div>;
};

export default RecipeList;
