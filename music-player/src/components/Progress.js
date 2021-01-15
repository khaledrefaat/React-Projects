import React from 'react';
import './Progress.css';

const Progress = ({ progress, duration, currentTime }) => {
    const timeCalc = time => {
        const timeFloor = Math.floor(time);
        if (timeFloor < 60 && timeFloor < 10) {
            return `0:0${timeFloor}`;
        } else if (timeFloor > 10 && timeFloor <= 60) {
            return `0:${timeFloor}`;
        } else if (timeFloor > 60 && timeFloor % 60 < 10) {
            return `${Math.floor(timeFloor / 60)}:0${timeFloor % 60}`;
        } else if (timeFloor > 60 && timeFloor % 60 >= 10) {
            return `${Math.floor(timeFloor / 60)}:${timeFloor % 60}`;
        }
    };

    return (
        <div className="progress-container">
            <div className="progress" style={{ width: `${progress}%` }}></div>
            <div className="duration-wrapper">
                <span className="current-time">{timeCalc(currentTime)}</span>
                <span className="duration">{timeCalc(duration)}</span>
            </div>
        </div>
    );
};

export default Progress;
