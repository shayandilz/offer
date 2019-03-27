import React, { Component } from 'react';
import CategoriesAction from './Category/Categories_action'
import ItemsAction from './Items/Items_action'
import axios from 'axios'
class Action extends Component {
    constructor(props){
        // console.log(props);
        super()
        this.state = {
            apiUrl:'https://api2.off-er.ir/user/get/action',
            action:[],
        }
    }
    componentDidMount(){
        const id = this.props.value.id
        axios({
            url:(`${this.state.apiUrl}`),
            method: 'post',
            data: JSON.stringify({refresh:"true", action_id:id})
        }).then(res => {
            this.setState({action: res.data.output})
            
        })
    }
    render() {
        if(this.state.action.page === "categories" ){
            return <CategoriesAction value={this.state.action} />       
        }else if(this.state.action.page === "items"){
            return <ItemsAction value={this.state.action} /> 
        }
        return(<div></div>)
    }
}

export default Action;
