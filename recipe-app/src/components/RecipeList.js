import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, recipeClicked }) => {
	const onRecipeClick = id => recipeClicked(id);

	const recipesList = recipes.map(({ image_url, publisher, title, recipe_id }, index) => {
		if (index <= 11)
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
		return null;
	});
	return <div className="row">{recipesList}</div>;
};

export default RecipeList;
