import React, { Component, createRef } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
    constructor(props) {
        super(props);
        this.videoRef = createRef();
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if (this.player || !this.props.stream) return;

        const { id } = this.props.match.params;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`,
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    renderStream() {
        return this.props.stream ? (
            <>
                <video
                    ref={this.videoRef}
                    style={{ width: '800px', height: '400px' }}
                    controls
                />
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
