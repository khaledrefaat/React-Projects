export const isAudioPlaying = isPlaying => {
    return {
        type: 'IS_AUDIO_PLAYING',
        payload: isPlaying,
    };
};

export const currentIndex = index => {
    return {
        type: 'CURRENT_INDEX',
        payload: index,
    };
};
