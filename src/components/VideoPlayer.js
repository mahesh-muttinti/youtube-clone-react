import React, { Component } from 'react';

class VideoPlayer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    render() {
        const video = this.props.video
        const videoObj = Object.assign({}, video)
        const videoId = Object.assign({}, videoObj.id)
        const originalVideoId = videoId.videoId
        console.log(originalVideoId)
        const src = `https://www.youtube.com/embed/${originalVideoId}`
        return (
        <div>
            <iframe title="video title" src={src} frameBorder="0" width="100%" height="400px"></iframe>
        </div>
        );
    }
}

export default VideoPlayer;
