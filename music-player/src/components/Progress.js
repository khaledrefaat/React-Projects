import React from 'react';
import './Progress.css';

const Progress = ({ progress, duration, currentTime }) => {
    const timeCalc = time => {
        const minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        if (seconds < 10) seconds = `0${seconds}`;
        if (seconds) return `${minutes}:${seconds}`;
        return '0:00';
    };

    return (
        <div className="progress-container" onClick={e => console.log(e)}>
            <div className="progress" style={{ width: `${progress}%` }}></div>
            <div className="duration-wrapper">
                <span className="current-time">{timeCalc(currentTime)}</span>
                <span className="duration">{timeCalc(duration)}</span>
            </div>
        </div>
    );
};

export default Progress;
