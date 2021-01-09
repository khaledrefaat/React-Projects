import React from 'react';

class App extends React.Component {
    state = { langauge: 'arabic' };

    onLanguageChange = langauge => this.setState({ langauge });

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a langauge:
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
                    <h1>Selected Language Is: {this.state.langauge}</h1>
                </div>
            </div>
        );
    }
}

export default App;
