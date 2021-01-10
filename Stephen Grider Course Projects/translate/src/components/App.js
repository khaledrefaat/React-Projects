import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
    state = { language: 'arabic' };

    onLanguageChange = language => this.setState({ language });

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
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;
