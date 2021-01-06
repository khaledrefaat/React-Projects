import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onFormEdit = formValues => this.props.editStream(this.props.stream.id, formValues);

	render() {
		return this.props.stream ? (
			<div>
				<h3>Stream Edit</h3>
				<StreamForm
					initialValues={_.pick(this.props.stream, [ 'title', 'description' ])}
					onSubmit={this.onFormEdit}
				/>
			</div>
		) : (
			<h1>Loading...</h1>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
