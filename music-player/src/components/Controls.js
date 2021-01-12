import React from 'react';
import { connect } from 'react-redux';
import { isAudioPlaying } from '../actions';
import './Controls.css';

class Controls extends React.Component {
    state = { isPlaying: false };

    componentDidUpdate() {
        this.props.isAudioPlaying(this.state.isPlaying);
    }

    onPlayButton = () => {
        this.setState({ isPlaying: !this.state.isPlaying });
    };

    render() {
        return (
            <div className="player-controls">
                <i className="fas fa-backward" title="previous" />
                <i
                    className="fas fa-play main-button"
                    title="play"
                    onClick={this.onPlayButton}
                />
                <i className="fas fa-forward" title="next" />
            </div>
        );
    }
}

export default connect(null, { isAudioPlaying })(Controls);
