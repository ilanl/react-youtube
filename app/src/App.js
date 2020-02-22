import React, { Component } from 'react';

import VideoSearch from './components/VideoSearch'
import VideoPlayer from './components/VideoPlayer'
import VideoList from './components/VideoList'

import api from './services/youtube'

class App extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      video: null,
      counter: 0
    }
  }

  componentDidMount() {
    for (var i=0; i< 10; i++) {
      this.setState({ counter: i+1 })
    }
    console.log(this.state.counter, i)
  }

  componentWillMount() {
    
    api.fetchVideos().then((videos) => {
      this.setState({
        videos,
        video: videos[0]
      })
    })
  }
  
  onSelect = (video) => {
    this.setState({
      video
    })
  }

  onSearch = (keywords) => {
    api.fetchVideos(keywords).then((videos) => {
      this.setState({
        videos
      })
    })
  }
  
  render() {
    console.log('counter rendered', this.state.counter)
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
            <VideoSearch onSearch={this.onSearch} />
          </div>
          <div className="col-md-3">
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-3">
            <VideoList onSelect={this.onSelect} videos={this.state.videos} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
