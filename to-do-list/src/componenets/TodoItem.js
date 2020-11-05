import React from 'react';
import DeleteBtn from './DeleteBtn';
const TodoItem = props => {
	return (
		<div className="todo">
			{props.todo}
			<DeleteBtn />
		</div>
	);
};

export default TodoItem;
