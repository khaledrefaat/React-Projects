import React from 'react';
import UserCreate from './UserCreate';
import { connect } from 'react-redux';
import { selectlanguage, selectColor } from '../actions';

class App extends React.Component {
    state = { language: 'arabic' };

    onLanguageChange = language => {
        this.setState({ language });
    };

    componentDidUpdate() {
        this.props.selectlanguage(this.state.language);
        const color = this.state.language === 'arabic' ? 'red' : 'primary';
        this.props.selectColor(color);
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    <i
                        className="flag eg"
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.onLanguageChange('arabic')}
                    />
                    <i
                        className="flag uk"
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.onLanguageChange('english')}
                    />
                </div>
                <UserCreate />
            </div>
        );
    }
}

export default connect(null, { selectlanguage, selectColor })(App);
