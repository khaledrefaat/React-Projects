import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';
class App extends React.Component {
	state = { todos: [] };
	onFormSubmit = term => {
		let joined = this.state.todos.concat(term);
		this.setState({ todos: joined });
	};
	render() {
		return (
			<div className="container">
				<h1>Todo List</h1>
				<TodoInput onFormSubmit={this.onFormSubmit} />
				<TodoList todos={this.state.todos} />
			</div>
		);
	}
}

export default App;
