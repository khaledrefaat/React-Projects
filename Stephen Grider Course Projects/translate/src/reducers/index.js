import { combineReducers } from 'redux';

const languageReducer = (state = { language: 'arabic' }, action) => {
    switch (action.type) {
        case 'SELECTED_LANGUAGE':
            return { ...state, language: action.payload };
        default:
            return state;
    }
};

const colorReducer = (state = { color: 'red' }, action) => {
    switch (action.type) {
        case 'SELECTED_COLOR':
            return { ...state, color: action.payload };
        default:
            return state;
    }
};

export default combineReducers({
    language: languageReducer,
    color: colorReducer,
});
