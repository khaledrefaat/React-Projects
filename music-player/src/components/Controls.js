import React, { useState, useEffect, useCallback } from 'react';
import './Controls.css';

const Controls = ({ isAudioPlaying, songsList, index, isEnded }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [songEnded, setSongEnded] = useState(false);

    const setIndex = useCallback(
        index => {
            if (index > 0 && currentIndex >= songsList.length - 1) {
                setCurrentIndex(0);
            } else if (index < 0 && currentIndex === 0) {
                setCurrentIndex(songsList.length - 1);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        },
        [currentIndex, songsList]
    );

    useEffect(() => {
        isAudioPlaying(isPlaying);
    }, [isPlaying, isAudioPlaying]);

    useEffect(() => {
        index(currentIndex);
    }, [index, currentIndex]);

    useEffect(() => {
        setTimeout(() => setSongEnded(isEnded), 500);
    }, [isEnded]);

    useEffect(() => {
        if (songEnded) {
            setIndex(1);
            setSongEnded(false);
        }
    }, [songEnded, setIndex]);

    const playClass = `fas fa-${isPlaying ? 'pause' : 'play'} main-button`;

    return (
        <div className="player-controls">
            <i class="fas fa-volume-up" />
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
