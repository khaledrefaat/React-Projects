import React from 'react';
import './Progress.css';

class Progress extends React.Component {
    timeCalc = time => {
        const minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        if (seconds < 10) seconds = `0${seconds}`;
        if (seconds) return `${minutes}:${seconds}`;
        return '0:00';
    };

    setProgressBar = e => {
        const width = e.target.clientWidth;
        const clickX = e.nativeEvent.offsetX;
        this.props.audioPlayer.currentTime =
            (clickX / width) * this.props.duration;
    };

    render() {
        return (
            <div className="progress-container" onClick={this.setProgressBar}>
                <div
                    className="progress"
                    style={{ width: `${this.props.progress}%` }}
                ></div>
                <div className="duration-wrapper">
                    <span className="current-time">
                        {this.timeCalc(this.props.currentTime)}
                    </span>
                    <span className="duration">
                        {this.timeCalc(this.props.duration)}
                    </span>
                </div>
            </div>
        );
    }
}

export default Progress;
