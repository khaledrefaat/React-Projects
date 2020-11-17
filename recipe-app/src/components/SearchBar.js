import React, { useState } from 'react';
import './Search.css';
const Search = ({ onFormSubmit }) => {
	const [ term, setTerm ] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		onFormSubmit(term);
		// console.log(onFormSubmit(term));
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group search">
					<input
						type="text"
						value={term}
						onChange={e => setTerm(e.target.value)}
						className="form-control search-input"
						placeholder="Search"
					/>
				</div>
			</form>
		</div>
	);
};

export default Search;
