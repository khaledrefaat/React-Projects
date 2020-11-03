import React from 'react';
import TodoInput from './TodoInput';
import './App.css';
class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Todo List</h1>
				<TodoInput />
			</div>
		);
	}
}

export default App;
