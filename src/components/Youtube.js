import React, { Component } from 'react'
import SearchBar from './SearchBar'
import YoutubeAPI from 'youtube-api-search'
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'
const API_KEY="AIzaSyDDifDU43iO4hNdL7R0_UtlDTJ6d3Du7KQ"

class Youtube extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         videos: [],
         selectedVideo: null
      }
    }

    componentDidMount() {
        this.fetchVideos('telugu love songs')
    }

    fetchVideos = (term) => {
        let thisObj = this
        YoutubeAPI({key: API_KEY, term: term}, (videos) => {
            thisObj.setState({videos: videos, selectedVideo: videos[0]})
        })
    }
    
    render() {
        return (
        <div>
            <SearchBar onSearchTerm={
                (term) => {
                    this.fetchVideos(term)
                }
            } />

            <VideoPlayer video={this.state.selectedVideo} />

            <VideoList onSelectVideo={(video) => this.setState({selectedVideo: video})} videos={this.state.videos} />
        </div>
        );
    }
}

export default Youtube;
