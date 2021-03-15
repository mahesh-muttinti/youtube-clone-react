import React, { Component } from 'react';

class VideoList extends Component {
    render() {
        return (
        <div>
            {this.props.videos.map(video => {
                return (
                    <li key={video.eid} onClick={() => this.props.onSelectVideo(video)}>
                        <h2>{video.snippet.title}</h2>
                        <img src={video.snippet.thumbnails.medium.url} alt="video one"/>
                    </li>
                )
            })}
        </div>
        );
    }
}

export default VideoList;
