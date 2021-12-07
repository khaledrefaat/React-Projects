import React, { useState } from 'react';
import AddBtn from './AddBtn';
import './Form.css';

const TodoForm = ({ onFormSubmit }) => {
	const [ term, setTerm ] = useState('');

	const onSubmit = event => {
		event.preventDefault();
		if (term) onFormSubmit(term);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" className="todo-input" value={term} onChange={e => setTerm(e.target.value)} />
				<AddBtn onClick={onSubmit} />
			</form>
		</div>
	);
};

export default TodoForm;
