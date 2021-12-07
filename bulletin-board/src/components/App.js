import React, { useState, useEffect } from 'react';
import './App.css';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';
let randomColor = require('randomcolor');

const App = () => {
	const [ item, setItem ] = useState('');
	const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('items')) || []);

	useEffect(
		() => {
			localStorage.setItem('items', JSON.stringify(items));
		},
		[ items ]
	);

	const keyDown = event => {
		const code = event.keyCode || event.which;
		if (code === 13) {
			newItem();
		}
	};

	const newItem = () => {
		if (item.trim() !== '') {
			// if item is not blank, create a new item object
			const newItem = {
				id: uuidv4(),
				item: item,
				color: randomColor({ luminosity: 'light' }),
				defaultPros: { x: 100, y: 0 }
			};
			setItems(items => [ ...items, newItem ]);
			setItem('');
		} else {
			alert('Enter a new item');
			setItem('');
		}
	};

	const updatePos = (data, index) => {
		let newArr = [ ...items ];
		newArr[index].defaultPos = { x: data.x, y: data.y };
		setItems(newArr);
	};

	const deleteNote = id => {
		setItems(items.filter(item => item.id !== id));
	};

	return (
		<div className="container">
			<input
				className="input"
				value={item}
				onChange={e => setItem(e.target.value)}
				placeholder="Enter Something..."
				onKeyDown={e => keyDown(e)}
			/>
			<button className="btn" onClick={newItem}>
				Enter
			</button>
			{items.map((item, index) => {
				return (
					<Draggable
						key={item.id}
						defaultPosition={item.defaultPos}
						onStop={(e, data) => {
							updatePos(data, index);
						}}
					>
						<div style={{ backgroundColor: item.color }} className="box item">
							{`${item.item}`}
							<i className="delete fas fa-times" id="delete" onClick={e => deleteNote(item.id)} />
						</div>
					</Draggable>
				);
			})}
		</div>
	);
};

export default App;
