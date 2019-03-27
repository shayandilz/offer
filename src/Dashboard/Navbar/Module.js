import React, { Component } from 'react'
import axios from 'axios'


export default class Module extends React.Component {
    constructor(props) {
      super(props);
      this.toggleHidden = this.toggleHidden.bind(this);
      this.state = {
        isHovered: false
      }
    }
  
    toggleHidden () {
      this.setState({
        isHovered: !this.state.isHovered
      })
    }
    
    
    render() {
      
  
      return (
        <div className='singleModule'
             onMouseEnter={this.toggleHidden}
             onMouseLeave={this.toggleHidden}
             >
          {this.props.name}
        </div>
      )
    }
  }