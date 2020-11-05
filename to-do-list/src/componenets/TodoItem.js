import React from 'react';
import DeleteBtn from './DeleteBtn';
import CompleteBtn from './CompleteBtn';
const TodoItem = props => {
	return (
		<div className="todo">
			<p>{props.todo}</p>
			<DeleteBtn />
			<CompleteBtn />
		</div>
	);
};

export default TodoItem;
