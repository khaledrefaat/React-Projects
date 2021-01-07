import React, { Component } from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { deleteStream } from "../../actions";

class StreamDelete extends Component {
    deleteStream = () => {
        this.props.deleteStream(this.props.match.params.id);
        this.onDismiss();
    };

    onDismiss() {
        history.push("/");
    }

    actions = (
        // a shortcut for React.Fragment
        <>
            <button className="ui negative button" onClick={this.deleteStream}>
                Delete
            </button>
            <button className="ui button" onClick={this.onDismiss}>
                Cancel
            </button>
        </>
    );
    render() {
        return (
            <div>
                <Modal
                    title="Delete Stream"
                    content="Are you sure you want to delete this?"
                    actions={this.actions}
                    navigate="/"
                    onDismiss={this.onDismiss}
                />
            </div>
        );
    }
}

export default connect(null, { deleteStream })(StreamDelete);
