import React from 'react'

const VideoItem = (props) => {

    const { title, thumbnails, description } = props.video.snippet

    return <div>
        <img
            src={thumbnails.medium.url}
            alt={description}
        />
        <div>
            <h2>{title}</h2>
        </div>
    </div>
}

export default VideoItem;