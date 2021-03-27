import React from 'react'

const VideoDetail = ({ selectedVideo }) => {


    if (!selectedVideo) {
        return (
            <div>
                Loading...
            </div>
        )
    } else
        return (
            <div className="ui segment">
                <h4 className="ui header">
                    {selectedVideo.snippet.title}
                </h4>
                <p>
                    {selectedVideo.snippet.description}
                </p>
            </div>
        );
}

export default VideoDetail;

/* selectedVideo loads is null when component mounts. The if statement gives the user time to
click on a video to show it on the screen*/