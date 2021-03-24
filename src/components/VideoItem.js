import React from 'react'

const VideoItem = (props) => {

    const { title, thumbnails, description } = props.video.snippet

    return <div className="item">
        <img className="ui image"
            src={thumbnails.medium.url}
            alt={description}
        />
        <div className="content">
            <div className="header">
                {title}
            </div>
        </div>
    </div>
}

export default VideoItem;