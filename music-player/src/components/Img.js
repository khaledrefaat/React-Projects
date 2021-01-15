import React from 'react';
import { connect } from 'react-redux';
import './Img.css';

class Img extends React.Component {
    render() {
        return (
            <div className="img-container">
                <img
                    src={`/img/${
                        this.props.songs[this.props.currentIndex].name
                    }.jpg`}
                    alt="Album Art"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { currentIndex: state.currentIndex.index, songs: state.songs };
};

export default connect(mapStateToProps)(Img);
