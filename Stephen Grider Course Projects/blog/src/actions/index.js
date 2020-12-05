import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
	// loop over the posts and get just unique ids
	const userIds = _.uniq(_.map(getState().posts, 'userId'));

	userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceHolder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceHolder.get(`/users/${id}`);
	dispatch({ type: 'FETCH_USER', payload: response.data });
};
