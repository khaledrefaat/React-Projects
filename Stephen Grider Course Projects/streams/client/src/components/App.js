import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

// Client Id
// 1038514144547-07qi5pk03rfojcni9u4n914vvffslpkr.apps.googleusercontent.com
// Client Secret
// 4F3-tRfLb8OKB8mGIYviSSX4

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={StreamList} />
					<Route path="/create" exact component={StreamCreate} />
					<Route path="/show" exact component={StreamShow} />
					<Route path="/edit" exact component={StreamEdit} />
					<Route path="/delete" exact component={StreamDelete} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
