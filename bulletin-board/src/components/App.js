import React, { useState, useEffect } from 'react';
import './App.css';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';
let randomColor = require('randomcolor');

const App = () => {
	const [ item, setItem ] = useState('');
	const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('items')) || []);

	const keyPress = event => {};

	const newItem = () => {};

	return (
		<div className="container">
			<input
				className="input"
				value={item}
				onChange={e => setItem(e.target.value)}
				placeholder="Enter Something..."
				onKeyPress={e => keyPress(e)}
			/>
			<button className="btn" onClick={newItem}>
				Enter
			</button>
			<p className="item">
				{' '}
				this is nothing and we pretend that this is nothing and everybody pretends that this is nothing
			</p>
		</div>
	);
};

export default App;
