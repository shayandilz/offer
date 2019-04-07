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
     const objects = this.props.object.slice(0,5)
      return (
        <div className='items'
          onMouseEnter={this.toggleHidden}
           
          >
          <div className='item'>
            <h6>{this.props.name}</h6>
              <div>{objects.map((items, index) => {
                return(
                  <p>{items.name}</p>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
  }