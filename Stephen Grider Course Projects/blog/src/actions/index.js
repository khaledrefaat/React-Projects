import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceHolder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// this solution to make the action creator fetch each user just 1 time
// and this have a side effect that if you want to fetch the user again it wont work so you need to make new action for this
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceHolder.get(`/users/${id}`);
	dispatch({ type: 'FETCH_USER', payload: response.data });
});
