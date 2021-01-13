import { combineReducers } from 'redux';

const isAudioPlayingReducer = (state = { isAudioPlaying: false }, action) => {
    switch (action.type) {
        case 'IS_AUDIO_PLAYING':
            return { ...state, isAudioPlaying: action.payload };
        default:
            return state;
    }
};

const indexReducer = (state = { index: 0 }, action) => {
    switch (action.type) {
        case 'CURRENT_INDEX':
            return { ...state, index: action.payload };
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
});
