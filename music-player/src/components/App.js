import React from 'react';
import Img from './Img';
import Progress from './Progress';
import Controls from './Controls';
import { connect } from 'react-redux';
import { isAudioPlaying, onAudioEnded } from '../actions';
import './App.css';

class App extends React.Component {
    state = {
        isEnded: false,
        progressPercent: 0,
        currentTime: '0:00',
        duration: '0:00',
    };

    componentDidUpdate(pervProps, pervState) {
        this.props.isPlaying ? this.playVideo() : this.pauseVideo();

        if (this.state.isEnded !== pervState.isEnded) {
            this.props.onAudioEnded(this.state.isEnded);
        }

        // if the current audio changed reset the ended state to false and play the next audio and wait 0.2sec to let the audio loads
        if (pervProps.currentIndex !== this.props.currentIndex) {
            this.setState({ isEnded: false });
            setTimeout(this.playVideo, 150);
        }
    }

    onAudioEnd = () => this.setState({ isEnded: true });

    onTimeUpdate = e => {
        if (this.props.isPlaying) {
            const { duration, currentTime } = e.nativeEvent.srcElement;
            // setState for music values
            this.setState({
                progressPercent: (currentTime / duration) * 100,
                currentTime,
                duration,
            });
        }
    };

    playVideo = () => this.player.play();

    pauseVideo = () => this.player.pause();

    render() {
        const cuurentSong = this.props.songs[this.props.currentIndex];
        return (
            <div className="player-container">
                <Img />
                <h2 id="title">{cuurentSong.displayName}</h2>
                <h3 id="artist">{cuurentSong.artist}</h3>
                <audio
                    src={`/music/${cuurentSong.name}.mp3`}
                    ref={ref => (this.player = ref)}
                    onEnded={this.onAudioEnd}
                    onTimeUpdate={this.onTimeUpdate}
                />
                <Progress
                    progress={this.state.progressPercent}
                    duration={this.state.duration}
                    currentTime={this.state.currentTime}
                    audioPlayer={this.player}
                />
                <Controls />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isPlaying: state.isPlaying.isAudioPlaying,
        songs: state.songs,
        currentIndex: state.currentIndex.index,
    };
};

export default connect(mapStateToProps, {
    onAudioEnded,
    isAudioPlaying,
})(App);
