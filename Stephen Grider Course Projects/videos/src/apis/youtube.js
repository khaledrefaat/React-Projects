import axios from 'axios';
const KEY = 'AIzaSyA962ZCqBadihkJG2xrraDFXcxhpFKo9eg';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
