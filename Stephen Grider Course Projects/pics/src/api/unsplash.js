import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 16en6CnMHiooSIla1isBSMjriLfc8mcV9HVKc2hAUkk'
	}
});
