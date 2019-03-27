import React, { Component } from 'react';
import Topbanner from './Pages/Topbanner';
import Page3 from './Pages/Page_3';
import Page4 from './Pages/Page_4'
class Carousels extends Component {
    constructor(props){
        // console.log(props);
        
        super()
        
    }
    
    render() {
        if(this.props.value.page === "1"){
            return <Topbanner value={this.props.value}/>
        }else if(this.props.value.page === "3"){
            return <Page3 value={this.props.value} />
        }else if(this.props.value.page === "4"){
            return <Page4 value={this.props.value} />
         }
    }
}

export default Carousels;
