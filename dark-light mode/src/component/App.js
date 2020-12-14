import React, { useState } from 'react';
import './App.css';
import './typography.css';
import Nav from './Nav';
import Home from './Home';
import Undraw from './Undraw';
import Buttons from './Buttons';
import Contact from './Contact';
// import Nav from './Home';
const App = () => {
	return (
		<div>
			<Nav />
			<Home />
			<Undraw />
			<Buttons />
			<Contact />
		</div>
	);
};
export default App;
