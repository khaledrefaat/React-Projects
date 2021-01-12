import React from 'react';
import './Progress.css';

const Progress = () => {
    return (
        <div className="progress-container">
            <div className="progress"></div>
            <div className="duration-wrapper">
                <span className="current-time">0:00</span>
                <span className="duration">2:06</span>
            </div>
        </div>
    );
};

export default Progress;
