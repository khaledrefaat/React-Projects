import React from 'react';

const CompleteBtn = () => {
	const CompleteTodo = e => {
		e.target.parentNode.classList.add('complete');
	};
	return <i className="fas fa-check btn-complete btn" onClick={CompleteTodo} />;
};

export default CompleteBtn;
