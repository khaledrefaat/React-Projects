import { combineReducers } from 'redux';
import {
    CURRENT_INDEX,
    ON_AUDIO_ENDED,
    IS_AUDIO_PLAYING,
} from '../actions/types';

const isAudioPlayingReducer = (state = {}, action) => {
    switch (action.type) {
        case IS_AUDIO_PLAYING:
            return { ...state, isAudioPlaying: action.payload };
        default:
            return state;
    }
};

const indexReducer = (state = { index: 0 }, action) => {
    switch (action.type) {
        case CURRENT_INDEX:
            return { ...state, index: action.payload };
        default:
            return state;
    }
};

const onAudioEndedReducer = (state = {}, action) => {
    switch (action.type) {
        case ON_AUDIO_ENDED:
            return { ...state, isEnded: action.payload };
        default:
            return state;
    }
};

const songs = () => [
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

export default combineReducers({
    isPlaying: isAudioPlayingReducer,
    songs,
    currentIndex: indexReducer,
    isAudioEnded: onAudioEndedReducer,
});
