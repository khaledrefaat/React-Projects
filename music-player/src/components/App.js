import React from 'react';
import Img from './Img';
import Progress from './Progress';
import Controls from './Controls';
import { connect } from 'react-redux';
import { isAudioPlaying } from '../actions';
import './App.css';

class App extends React.Component {
    componentDidUpdate() {
        this.props.isPlaying ? this.player.play() : this.player.pause();
    }

    render() {
        return (
            <div className="player-container">
                <Img />
                <h2 id="title">Electric Chilll Machine</h2>
                <h3 id="artist">Jacinto</h3>
                <audio
                    src="/music/jacinto-1.mp3"
                    ref={ref => (this.player = ref)}
                />
                <Progress />
                <Controls />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { isPlaying: state.isPlaying.isAudioPlaying };
};

export default connect(mapStateToProps, { isAudioPlaying })(App);
