import { combineReducers } from 'redux';

const isAudioPlayingReducer = (state = { isAudioPlaying: false }, action) => {
    switch (action.type) {
        case 'IS_AUDIO_PLAYING':
            return { ...state, isAudioPlaying: action.payload };
        default:
            return state;
    }
};

export default combineReducers({
    isPlaying: isAudioPlayingReducer,
});
