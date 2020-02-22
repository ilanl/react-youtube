import React, { Component, Fragment } from 'react'

export default class VideoPlayer extends Component {
  
  render() {
    let { video } = this.props
    
    if (!video) {
      return <div>play a video</div>
    }

    let { description } = video
    return (
      <Fragment>
      <div className="row" style={{ minWidth: '100%'}}>
        <iframe style={{ paddingLeft: '20px', width: '100vw',height: '80vh',position: 'relative' }} src={`http://www.youtube.com/embed/${video.id}`} allowFullScreen frameBorder="0" title={video.title}/>
      </div>
      <div className="row">
        <div style={{margin: '20px', padding: '25px', width: 'auto' }}>{description}</div>
      </div>
      </Fragment>
    )
  }
}
