import React from 'react'

const VideoList = (props) => {
    return (
        <div>
            {props.videos.map((video, index) => {
                return <div key={index} >{video.snippet.title} </div>
            })}
        </div>
    )
}

export default VideoList;



