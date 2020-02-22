import React, { Component } from 'react'

export default class VideoItem extends Component {
  
  formatTitle = (video, maxLength) => {
    let str = video.title
    return str.length > maxLength ? video.title.substring(0, maxLength-3) + '...' : str
  }

  render() {
    let { video, onSelect } = this.props
    return (
      <div key={`${video.id}-item`} className='row' style={{ marginBottom: '10px' }} onClick={(e) => { onSelect(video) } }>
        <div key={`${video.id}-video`} className='col-8' style={{ paddingLeft: '30px', paddingRight: '20px' }} >
          <img key={`${video.id}-thumb`} src={video.thumbnailUrl} style={{ width: '100%', height: 'auto' }} alt={video.id} />
        </div>
        <div key={`${video.id}-item-text`} className='col-4'>
          <div key={`${video.id}-item-desc`} style={{ position: 'relative', left: '-20px', width: 'auto' }}>{this.formatTitle(video, 25)}</div>
        </div>
      </div>
    )
  }
}
