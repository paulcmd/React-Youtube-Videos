import React from 'react'
import youtube from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    onSearchTermSubmit = async searchTerm => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })
        this.setState({ videos: response.data.items })
        console.log(response.data.items)
    }

    onVideoSelect = (video) => {
        console.log(`${video.snippet.channelTitle} : `, video)
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">

                <SearchBar
                    onFormSubmit={this.onSearchTermSubmit}
                />

                <VideoDetail
                    selectedVideo={this.state.selectedVideo}
                />

                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

export default App