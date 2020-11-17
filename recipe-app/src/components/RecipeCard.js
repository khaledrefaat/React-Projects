import React from 'react';
import './RecipeCard.css';
const RecipeCard = ({ imageUrl, publisher, title }) => {
	return (
		<div className="col-sm-2">
			<div className="card recipe-card">
				<img src={imageUrl} className="card-img-top" alt={title} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{publisher}</p>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
