import React, { Component } from 'react';

class GoogleAuth extends Component {
	state = { isSignedIn: null };

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: '1038514144547-07qi5pk03rfojcni9u4n914vvffslpkr.apps.googleusercontent.com',
					scope: 'email'
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) return <div>Idk if we are signed In</div>;
		else if (this.state.isSignedIn) return <div>You Are Signed in</div>;
		else if (!this.state.isSignedIn) return <div>You Are not Signed In</div>;
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default GoogleAuth;
