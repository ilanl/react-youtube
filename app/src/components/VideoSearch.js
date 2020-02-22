import React, { Component } from 'react'
import debounce from 'lodash/debounce'

export default class VideoSearch extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      keywords: ''
    }  
    
    this.changed = debounce((keywords)=> props.onSearch(keywords), 3000)
  }
  
  handleChange = e => {
    const val = e.target.value
    this.setState({ keywords: val }, () => {
      this.changed(val)
    })
  }

  render() {
    return (
      <input style={{margin: '20px', padding: '10px', minWidth:'100%'}} type="text" value={this.state.keywords} onChange={this.handleChange} placeholder='keywords'/>
    )
  }
}
