import React from 'react';
import { connect } from 'react-redux';
import { currentIndex } from '../actions';
import './Img.css';

class Img extends React.Component {
    render() {
        return (
            <div className="img-container">
                <img
                    src={this.props.imgList[this.props.currentImg]}
                    alt="Album Art"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { currentImg: state.currentIndex.index, imgList: state.imgList };
};

export default connect(mapStateToProps, { currentIndex })(Img);
