import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
	// loop over the posts with map
	//  get unique ids
	// fetch users for each id
	_.chain(getState().posts).map('userId').uniq().forEach(id => dispatch(fetchUser(id))).value();
};

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceHolder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceHolder.get(`/users/${id}`);
	dispatch({ type: 'FETCH_USER', payload: response.data });
};
