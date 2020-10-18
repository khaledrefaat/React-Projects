// Import the React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';

// Create a react component
const App = () => {
	const buttonText = { text: 'click on me' };
	let today = new Date();
	// const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
	const time = `${today.getHours()}:${today.getMinutes()} AM`;
	return (
		<div>
			<label className="label">enter your name</label>
			<input type="text" id="name" />
			<button style={{ fontSize: '14px', outline: 'none', cursor: 'pointer' }}>{buttonText.text}</button>
			<h2>Current Time {time}</h2>
		</div>
	);
};

// take the react component and show it on the screen
ReactDom.render(<App />, document.getElementById('root'));
