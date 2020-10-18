import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component {
	state = { images: [] };
	onSearchSubmit = async (term) => {
		const reponse = await unsplash.get('/search/photos', {
			params: { query: term }
		});
		this.setState({ images: reponse.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
// to review the app should watch section[10](Using Ref's for Dom Acssess) lecture[8](App Overview)
