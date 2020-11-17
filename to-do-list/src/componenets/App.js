import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';
const App = () => {
	const [ todos, setTodos ] = useState([]);
	const onFormSubmit = term => {
		setTodos([ ...todos, term ]);
	};
	return (
		<div className="container">
			<h1>Todo List</h1>
			<TodoForm onFormSubmit={onFormSubmit} />
			<TodoList todos={todos} />
		</div>
	);
};

export default App;
