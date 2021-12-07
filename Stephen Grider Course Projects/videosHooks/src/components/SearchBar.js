import React, { useState } from 'react';
// import SearchBar from './SearchBar';

const SearchBar = ({ onFormSubmit }) => {
	const [ term, setTerm ] = useState('');

	const onSubmit = event => {
		event.preventDefault();
		onFormSubmit(term);
		console.log('runing');
	};

	return (
		<div className="search-bar ui segment">
			<form className="ui form" onSubmit={onSubmit}>
				<div className="field">
					<label>Video Search</label>
					<input type="text" value={term} onChange={event => setTerm(event.target.value)} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
