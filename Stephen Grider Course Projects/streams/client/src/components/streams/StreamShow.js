import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderStream() {
        return this.props.stream ? (
            <>
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </>
        ) : (
            <div>Loading...</div>
        );
    }

    render() {
        return <div>{this.renderStream()}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
