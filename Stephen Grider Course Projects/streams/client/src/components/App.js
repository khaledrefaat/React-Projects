import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const pageOne = () => {
	return (
		<div>
			<h1>PageOne</h1>
			<br />
			{/* this is bad don't ever do this in react */}
			{/* <a href="/pagetwo">Navigate To Page Two</a> */}
			<Link to="/pagetwo">Navigate To Page Two </Link>
		</div>
	);
};
const pageTwo = () => {
	return (
		<div>
			<h1>PageTwo</h1>
			<br />
			{/* this is bad don't ever do this in react */}
			{/* <a href="/">Navigate To Page One</a> */}
			<Link to="/">Navigate To Page One </Link>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Route path="/" exact component={pageOne} />
					<Route path="/pagetwo" exact component={pageTwo} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
