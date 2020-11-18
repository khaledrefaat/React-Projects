import React from 'react';

const RecipeDetail = ({ selectedRecipe }) => {
	if (selectedRecipe) {
		const ingredients = selectedRecipe['ingredients'].map((ingredient, index) => {
			return (
				<li className="list-group-item" key={index}>
					{ingredient}
				</li>
			);
		});

		console.log(selectedRecipe);

		return (
			<div className="card">
				<img src={selectedRecipe.image_url} alt={selectedRecipe.title} />
				<div className="card-body">
					<h5 className="card-title">{selectedRecipe.title}</h5>
					<p className="card-text">{selectedRecipe.publisher}</p>
				</div>
				<ul className="list-group list-group-flush">{selectedRecipe ? ingredients : ''}</ul>
			</div>
		);
	}
	return '';
};

export default RecipeDetail;
