import React, { Component } from 'react'
import ModuleGroupSelector from './ModuleGroupSelector'
import axios from 'axios'
export default class MainNavbar extends Component {
    constructor(props){
        super(props)
        this.state={
            apiUrl:'https://api2.off-er.ir/user/get/categories',
            categories:[]
        }
    }
    componentDidMount(){
        axios({
            url:(`${this.state.apiUrl}`),
            method: 'post',
            data: JSON.stringify({ cat_id:"catroot"})
        }).then(res => {
            this.setState({categories: res.data.output.categories})
        })
    }
  render() {
    //   console.log(this.state.categories);
      
    return (
      <div>
      <nav id="navbar_main">
      <div className=" container"> 
        <div className="row justify-content-cm-center">
            <div className="col-md-1">hello</div>
              <div className="col-md-10">
                
              </div>
            <div className="col-md-1">
                <i className="fas fa-user-circle"><span className="register">Register</span></i>  
            </div>
        </div>   
      </div>
      <div className=" container"> 
        <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
                <ModuleGroupSelector moduleGroups={this.state.categories} />
            </div>
        </div>   
      </div>
    </nav>
      </div>
    )
  }
}
