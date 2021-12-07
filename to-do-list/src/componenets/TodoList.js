import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos }) => {
	const todo = todos.map((todo, index) => {
		return <TodoItem todo={todo} key={index} />;
	});
	return <ul className="todo-list">{todo}</ul>;
};

export default TodoList;
