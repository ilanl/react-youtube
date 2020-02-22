import React, { Component, Fragment } from 'react'
import VideoItem from './VideoItem'

export default class VideoList extends Component {
  
  render() {
    let { videos, onSelect } = this.props
    return (
      <div style={{ margin: '20px', borderTop: '#e0e0e0 1px solid', borderRight: '#e0e0e0 1px solid', borderLeft: '#e0e0e0 1px solid', borderRadius: '33'  }}>
        {
          videos.map((video, k) => {
            let upperDivider
            if (k === 0) {
              upperDivider = (<div key={`${video.id}-t`} style={{ marginTop: '15px' }}/>)
            }
            return (
              <Fragment key={`${video.id}-f`}>
                {upperDivider}
                <VideoItem key={`${video.id}-video-item`} video={video} onSelect={onSelect} />
                <hr key={`${video.id}-b`} style={{ paddingBottom: '1px', marginTop: '1px', borderTop: '1px solid white', borderBottom: '1px solid #e0e0e0' }}/>
              </Fragment>
            )
          })
        }
      </div>
    )
  }
}
