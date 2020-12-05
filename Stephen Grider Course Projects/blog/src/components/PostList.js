import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="media list-group-item d-flex post" key={post.id}>
					<i className="fas fa-user align-self-center mr-3" />
					<div className="media-body">
						<h5 className="mt-2">{post.title}</h5>
						<p>{post.body}</p>
						<UserHeader userId={post.userId} />
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="list-group list-group-flush">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
