import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = props => {
	const todo = props.todos.map(todo => {
		return <TodoItem todo={todo} />;
	});
	console.log(props.todos);
	return <ul className="todo-list">{todo}</ul>;
};

export default TodoList;
