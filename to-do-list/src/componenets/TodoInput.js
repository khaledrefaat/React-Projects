import React from 'react';
import AddBtn from './AddBtn';
import './Form.css';
class TodoInput extends React.Component {
	state = { term: '' };

	onFormSubmit = event => {
		event.preventDefault();
		console.log(this.state.term);
	};
	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input
						type="text"
						className="todo-input"
						value={this.state.term}
						onChange={e => this.setState({ term: e.target.value })}
					/>
					<AddBtn onClick={this.onFormSubmit} />
				</form>
			</div>
		);
	}
}

export default TodoInput;
