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
		<div>
			<input
				value={item}
				onChange={e => setItem(e.target.value)}
				palceholder="Enter Something..."
				onKeyPress={e => keyPress(e)}
			/>
			<button onClick={newItem}>Enter</button>
		</div>
	);
};

export default App;
