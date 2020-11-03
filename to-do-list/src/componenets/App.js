import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';
class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Todo List</h1>
				<TodoInput />
				<TodoList />
			</div>
		);
	}
}

export default App;
