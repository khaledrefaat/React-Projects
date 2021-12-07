export const selectlanguage = language => {
    return {
        type: 'SELECTED_LANGUAGE',
        payload: language,
    };
};

export const selectColor = color => {
    return {
        type: 'SELECTED_COLOR',
        payload: color,
    };
};
