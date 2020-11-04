import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = props => {
	return (
		<ul className="todo-list">
			<TodoItem />
		</ul>
	);
};

export default TodoList;
