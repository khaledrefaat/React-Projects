import React, { useState, useEffect, useRef } from 'react';
import Img from './Img';
import Progress from './Progress';
import Controls from './Controls';
import './App.css';

const App = () => {
    const [isEnded, setIsEnded] = useState(false);
    const [progressPercent, setProgressPercent] = useState(0);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const audioPlayer = useRef(null);

    useEffect(() => {
        isPlaying ? audioPlayer.current.play() : audioPlayer.current.pause();
    }, [isPlaying, audioPlayer]);

    useEffect(() => {
        setIsEnded(false);
        if (isPlaying) {
            const timerId = setTimeout(() => {
                audioPlayer.current.play();
            }, 150);
            return () => {
                clearTimeout(timerId);
            };
        }
    }, [currentIndex, audioPlayer, isPlaying]);

    const songs = [
        {
            name: 'jacinto-1',
            displayName: 'Electric Chill Machine',
            artist: 'Jacinto Design',
        },
        {
            name: 'jacinto-2',
            displayName: 'Seven Nation Army (Remix)',
            artist: 'Jacinto Design',
        },
        {
            name: 'jacinto-3',
            displayName: 'Goodnight, Disco Queen',
            artist: 'Jacinto Design',
        },
        {
            name: 'metric-1',
            displayName: 'Front Row (Remix)',
            artist: 'Metric/Jacinto Design',
        },
    ];

    const onAudioEnd = () => setIsEnded(true);

    const onTimeUpdate = e => {
        if (isPlaying) {
            const { duration, currentTime } = e.nativeEvent.srcElement;
            // setState for music values
            setProgressPercent((currentTime / duration) * 100);
            setCurrentTime(currentTime);
            setDuration(duration);
        }
    };

    const isAudioPlaying = playing => setIsPlaying(playing);

    const changeCurrentIndex = index => {
        setCurrentIndex(index);
    };

    const cuurentSong = songs[currentIndex];

    console.log(audioPlayer.current.volume);

    return (
        <div className="player-container">
            <Img songsList={songs} currentIndex={currentIndex} />
            <h2 id="title">{cuurentSong.displayName}</h2>
            <h3 id="artist">{cuurentSong.artist}</h3>
            <audio
                src={`/music/${cuurentSong.name}.mp3`}
                ref={audioPlayer}
                onEnded={onAudioEnd}
                onTimeUpdate={onTimeUpdate}
            />
            <Progress
                progress={progressPercent}
                duration={duration}
                currentTime={currentTime}
                audioPlayer={audioPlayer.current}
            />
            <Controls
                songsList={songs}
                isEnded={isEnded}
                isAudioPlaying={isPlaying => isAudioPlaying(isPlaying)}
                index={index => changeCurrentIndex(index)}
            />
        </div>
    );
};

export default App;
