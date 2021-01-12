export const isAudioPlaying = isPlaying => {
    return {
        type: 'IS_AUDIO_PLAYING',
        payload: isPlaying,
    };
};
