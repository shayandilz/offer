import React from 'react'
import './categories_branch.css'


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
      console.log(this.props.object);
      const objects = this.props.object.map((items, index) => {
        return(
          <p>{items.name}</p>
        )
        
      })
      
  
      return (
        <div className='singleModule'
             onMouseEnter={this.toggleHidden}
           
             >
             <h6>{this.props.name}</h6>
             <p>{objects}</p>
          
          
        </div>
      )
    }
  }