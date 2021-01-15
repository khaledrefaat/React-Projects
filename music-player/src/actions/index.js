import { CURRENT_INDEX, ON_AUDIO_ENDED, IS_AUDIO_PLAYING } from './types';

export const isAudioPlaying = isPlaying => {
    return {
        type: IS_AUDIO_PLAYING,
        payload: isPlaying,
    };
};

export const onAudioEnded = onEnded => {
    return {
        type: ON_AUDIO_ENDED,
        payload: onEnded,
    };
};

export const currentIndex = index => {
    return {
        type: CURRENT_INDEX,
        payload: index,
    };
};
