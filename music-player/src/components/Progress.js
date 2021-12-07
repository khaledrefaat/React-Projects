import React from 'react';
import './Progress.css';

const Progress = ({ progress, currentTime, duration, audioPlayer }) => {
    const timeCalc = time => {
        const minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        if (seconds < 10) seconds = `0${seconds}`;
        if (seconds) return `${minutes}:${seconds}`;
        return '0:00';
    };

    const setProgressBar = e => {
        if (progress !== 0) {
            const width = e.target.clientWidth;
            const clickX = e.nativeEvent.offsetX;
            audioPlayer.currentTime = (clickX / width) * duration;
        }
    };

    return (
        <div className="progress-container" onClick={setProgressBar}>
            <div className="progress" style={{ width: `${progress}%` }}></div>
            <div className="duration-wrapper">
                <span className="current-time">{timeCalc(currentTime)}</span>
                <span className="duration">{timeCalc(duration)}</span>
            </div>
        </div>
    );
};

export default Progress;
