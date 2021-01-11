import React from 'react';
import Img from './Img';
import Audio from './Audio';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="player-container">
                <Img />
                <h2 id="title">Electric Chill Machine</h2>
                <h3 id="artist">Jacinto</h3>
                <Audio />
            </div>
        );
    }
}

export default App;
