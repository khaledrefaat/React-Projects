import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const pageOne = () => {
	return <h1>PageOne</h1>;
};
const pageTwo = () => {
	return <h1>PageTwo</h1>;
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
