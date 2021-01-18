import React, { useState, useEffect } from 'react';
import './Controls.css';

const Controls = ({ isAudioPlaying, songsList, isEnded, index }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        isAudioPlaying(isPlaying);
    }, [isPlaying, isAudioPlaying]);

    useEffect(() => {
        index(currentIndex);
    }, [index, currentIndex]);

    useEffect(() => {
        if (isEnded) {
            setCurrentIndex(currentIndex + 1);
        }
    }, [isEnded, currentIndex]);

    function setIndex(index) {
        if (index > 0 && currentIndex >= songsList.length - 1) {
            setCurrentIndex(0);
        } else if (index < 0 && currentIndex === 0) {
            setCurrentIndex(songsList.length - 1);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const playClass = `fas fa-${isPlaying ? 'pause' : 'play'} main-button`;

    return (
        <div className="player-controls">
            <i
                className="fas fa-backward"
                title="previous"
                onClick={() => setIndex(-1)}
            />
            <i
                className={playClass}
                title="play"
                onClick={() => setIsPlaying(!isPlaying)}
            />
            <i
                className="fas fa-forward"
                title="next"
                onClick={() => setIndex(1)}
            />
        </div>
    );
};

export default Controls;
