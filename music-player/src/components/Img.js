import React from 'react';
import './Img.css';

class Img extends React.Component {
    render() {
        return (
            <div className="img-container">
                <img
                    src={`/img/${
                        this.props.songsList[this.props.currentIndex].name
                    }.jpg`}
                    alt="Album Art"
                />
            </div>
        );
    }
}

export default Img;
