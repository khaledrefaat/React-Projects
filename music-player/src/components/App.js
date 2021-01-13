import React from 'react';
import Img from './Img';
import Progress from './Progress';
import Controls from './Controls';
import { connect } from 'react-redux';
import { isAudioPlaying, currentIndex } from '../actions';
import './App.css';

class App extends React.Component {
    state = { isEnded: false };

    componentDidUpdate(pervProps) {
        this.props.isPlaying ? this.player.play() : this.player.pause();
        // if the current audio changed reset the ended state to false and play the next audio and wait 0.1sec to let the audio loads
        if (pervProps.currentAudio !== this.props.currentAudio) {
            this.setState({ isEnded: false });
            setTimeout(() => this.player.play(), 100);
        }
    }

    onAudioEnd = () => this.setState({ isEnded: true });

    render() {
        return (
            <div className="player-container">
                <Img img={this.props.imgList} />
                <h2 id="title">Electric Chilll Machine</h2>
                <h3 id="artist">Jacinto</h3>
                <audio
                    src={this.props.musicList[this.props.currentAudio]}
                    ref={ref => (this.player = ref)}
                    onEnded={this.onAudioEnd}
                    controls
                />
                <Progress />
                <Controls isEnded={this.state.isEnded} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isPlaying: state.isPlaying.isAudioPlaying,
        musicList: state.musicList,
        imgList: state.imgList,
        currentAudio: state.currentIndex.index,
    };
};

export default connect(mapStateToProps, { isAudioPlaying, currentIndex })(App);
