import React from 'react';

const DeleteBtn = props => {
	const DeleteTodo = e => {
		e.target.parentNode.classList.add('deleted');
		setTimeout(() => {
			e.target.parentNode.remove();
		}, 500);
	};
	return <i className="fas fa-trash btn-delete btn" onClick={DeleteTodo} />;
};

export default DeleteBtn;
