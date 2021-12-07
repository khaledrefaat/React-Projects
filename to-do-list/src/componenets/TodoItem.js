import React from 'react';
import DeleteBtn from './DeleteBtn';
import CompleteBtn from './CompleteBtn';
const TodoItem = ({ todo }) => {
	return (
		<div className="todo">
			<p>{todo}</p>
			<DeleteBtn />
			<CompleteBtn />
		</div>
	);
};

export default TodoItem;
