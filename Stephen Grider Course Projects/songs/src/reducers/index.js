import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'The Boy Is Mine', duration: '2:48' },
		{ title: 'Wannabe', duration: '3:15' },
		{ title: 'Baby Got Back', duration: '4:15' },
		{ title: 'I Swear', duration: '2:50' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SELECTED_SONG') {
		return action.payload;
	}
	return selectedSong;
};
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
