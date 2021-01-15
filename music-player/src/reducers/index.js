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

const indexReducer = (state = {}, action) => {
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

const musicListSrc = () => [
    '/music/jacinto-1.mp3',
    '/music/jacinto-2.mp3',
    '/music/jacinto-3.mp3',
    '/music/metric-1.mp3',
];
const imgListSrc = () => [
    '/img/jacinto-1.jpg',
    '/img/jacinto-2.jpg',
    '/img/jacinto-3.jpg',
    '/img/metric-1.jpg',
];

export default combineReducers({
    isPlaying: isAudioPlayingReducer,
    musicList: musicListSrc,
    imgList: imgListSrc,
    currentIndex: indexReducer,
    isAudioEnded: onAudioEndedReducer,
});
