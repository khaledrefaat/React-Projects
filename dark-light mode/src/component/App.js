import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './typography.css';
import Nav from './Nav';
import Home from './Home';
import Undraw from './Undraw';
import Buttons from './Buttons';
import Contact from './Contact';
// import Nav from './Home';
const App = () => {
	const [ isBoxChecked, setisBoxChecked ] = useState(false);

	useEffect(
		() => {
			isBoxChecked
				? document.documentElement.setAttribute('data-theme', 'dark')
				: document.documentElement.setAttribute('data-theme', 'light');
		},
		[ isBoxChecked ]
	);

	const onCheck = () => {
		setisBoxChecked(!isBoxChecked);
	};

	console.log(isBoxChecked);

	return (
		<div>
			<Nav onCheck={onCheck} />
			<Home />
			<Undraw />
			<Buttons />
			<Contact />
		</div>
	);
};
export default App;
