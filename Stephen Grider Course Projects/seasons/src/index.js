import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// 6.understanding lifecycle methods lecture 

class App extends React.Component {
	// React Says we have to define render

	// constructor(props) {
	// 	super(props);
	// 	// this is the only time we do direct assign to the state
	// 	this.state = { lat: null, errorMessage: '' };
	// }

	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		console.log('Hey i Was Called!');
		window.navigator.geolocation.getCurrentPosition(
			// do not ever ever ever do this the only possible way to do this when we create the state
			// this.state.lat = position.coords.latitude
			(position) => this.setState({ lat: Math.floor(position.coords.latitude) }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	componentDidUpdate() {
		console.log('Hey i Was Called Again! Rerendred Yeah!');
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		} else if (this.state.lat && !this.state.errorMessage) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <Spinner message="Please Allow The Location" />
	}

	render() {
		return this.renderContent();
	}
}

ReactDom.render(<App />, document.getElementById('root'));