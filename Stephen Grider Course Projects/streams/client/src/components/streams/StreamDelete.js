import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { deleteStream, fetchStream } from "../../actions";

class StreamDelete extends Component {
    id = this.props.match.params.id;

    componentDidMount() {
        this.props.fetchStream(this.id);
    }

    renderContent() {
        return this.props.stream
            ? `Are you sure you want to delete this stream with title: "${this.props.stream.title}" ?`
            : "Are you sure you want to delete this stream?";
    }

    renderActions() {
        // a shortcut for React.Fragment
        return (
            <>
                <button
                    onClick={() => this.props.deleteStream(this.id)}
                    className="ui negative button"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </>
        );
    }
    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                navigate="/"
                onDismiss={() => history.push("/")}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
    StreamDelete
);
