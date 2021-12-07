import React from 'react';
import './BgVideo.css';

function BgVideo() {
    return (
        <div className="video-container">
            <video
                src="/video/Sunset Lapse.mp4"
                className="video"
                muted
                loop
                autoPlay
            >
                <source src="/video/Sunset Lapse.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default BgVideo;
