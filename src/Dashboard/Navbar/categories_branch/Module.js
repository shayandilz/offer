import React from 'react'
import './Navbar.css'


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
     const objects = this.props.object.slice(0,5)
      return (
        <ul className='items'
          onMouseEnter={this.toggleHidden}
     
          >
          <li className='item'>
            <a className="object">{this.props.name}</a>
            <ul style={{listStyle:'none'}}>
            {objects.map((items, index) => {
                return(
                  <li><a key={index.toString()} className='object_type'>{items.name}</a></li>
                )
              })}
            </ul>
              
            
          </li>
        </ul>
      )
    }
  }