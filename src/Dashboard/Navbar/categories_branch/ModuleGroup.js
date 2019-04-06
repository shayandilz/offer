import React from 'react'
import axios from 'axios'
import Module from './Module'
import './categories_branch.css'
export default class ModuleGroup extends React.Component {
    constructor(props) {
        // console.log(props);
        
      super(props);
      this.toggleHidden = this.toggleHidden.bind(this);
      this.state = {
        apiUrl:'https://api2.off-er.ir/user/get/categories',
        isVisible: false, 
        objects:[]
      }
    }
    
    

    toggleHidden () {
       
      this.setState({
        isVisible: !this.state.isVisible
      })
      if(this.state.objects.length === 0) {
        axios({
            url:(`${this.state.apiUrl}`),
            method: 'post',
            data: JSON.stringify({ with_ob:"true",cat_id:this.props.id})
        }).then(res => {
            this.setState({objects: res.data.output.categories})
        
            
        })
    }
      
    }
    
    render() {
      

      return (
        <div className='moduleGroup'
             onMouseEnter={this.toggleHidden}
             
        >
         
          {this.props.name}
          <img className='icons' src={this.props.icon} alt='icon' />
          <div className={`modulesSet ${this.state.isVisible ? 'visible': ''}`}>
            {this.state.objects.map(module => <Module
                name={module.name}
                object={module.object_types}
              />)}
          </div>
        </div>
      )
    }
  }