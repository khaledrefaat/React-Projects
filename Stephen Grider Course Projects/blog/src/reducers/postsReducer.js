// reducers must always return anyvalue other undefined
const postsReducer = (state = [], action) => {
	// usually developers type in reducer (switch) not (if)
	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload;
		default:
			return state;
	}
};

export default postsReducer;
