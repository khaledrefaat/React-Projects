import React from 'react';
import { connect } from 'react-redux';
import { isAudioPlaying, currentIndex, onAudioEnded } from '../actions';
import './Controls.css';

class Controls extends React.Component {
    state = { isPlaying: false, currentIndex: 0 };

    componentDidUpdate(prevProps, prevState) {
        // let reduxStore knows playbutton was clicked and audio should play
        if (this.state.isPlaying !== prevState.isPlaying)
            this.props.isAudioPlaying(this.state.isPlaying);

        // change the currentIndex of audio and img
        if (prevState.currentIndex !== this.state.currentIndex)
            this.props.currentIndex(this.state.currentIndex);

        // if the current audio ended go to the next one
        if (this.props.isEnded && this.props.isEnded !== prevProps.isEnded)
            this.updateCurrentIndex(1);
    }

    updateCurrentIndex = value => {
        let oldIndex = this.state.currentIndex;
        if (
            value > 0 &&
            this.state.currentIndex >= this.props.musicList.length - 1
        ) {
            this.setState({ currentIndex: 0 });
        } else if (value < 0 && this.state.currentIndex === 0) {
            this.setState({ currentIndex: this.props.musicList.length - 1 });
        } else {
            this.setState({ currentIndex: (oldIndex += value) });
        }
    };

    onPlayButton = () => {
        this.setState({ isPlaying: !this.state.isPlaying });
    };

    render() {
        const playClass = `fas fa-${
            this.state.isPlaying ? 'pause' : 'play'
        } main-button`;

        return (
            <div className="player-controls">
                <i
                    className="fas fa-backward"
                    title="previous"
                    onClick={() => this.updateCurrentIndex(-1)}
                />
                <i
                    className={playClass}
                    title="play"
                    onClick={() => this.onPlayButton()}
                />
                <i
                    className="fas fa-forward"
                    title="next"
                    onClick={() => this.updateCurrentIndex(1)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { musicList: state.musicList, isEnded: state.isAudioEnded.isEnded };
};

export default connect(mapStateToProps, {
    isAudioPlaying,
    currentIndex,
    onAudioEnded,
})(Controls);
