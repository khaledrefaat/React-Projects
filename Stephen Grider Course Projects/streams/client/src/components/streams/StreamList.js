import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import { connect } from 'react-redux';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link
                        to={`/streams/edit/${stream.id}`}
                        className="primary ui button"
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/streams/delete/${stream.id}`}
                        className="negative ui button"
                    >
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderCreateStream() {
        if (this.props.isUserSignedIn)
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div key={stream.id} className="item">
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreateStream()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isUserSignedIn: state.auth.isSignedIn,
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
