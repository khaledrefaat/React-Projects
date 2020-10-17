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
// [10]using ref for dom acssess - [2]issues with css grid
