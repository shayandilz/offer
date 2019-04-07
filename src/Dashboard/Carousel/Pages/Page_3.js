import React, { Component } from 'react';
import axios from 'axios'
import './Page_3.css'
class Page_3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            apiUrl:'https://api2.off-er.ir/user/get/carousel',  
            banner:[]
        };
    }
    componentDidMount(){
        const id = this.props.value.id
        axios({
            url:(`${this.state.apiUrl}`),
            method: 'post',
            data: JSON.stringify({refresh:"true", carousel_id:id})
        }).then(res => {
            this.setState({banner: res.data.output})
        })
    }
    render() {
        const banner_3 = this.state.banner.map((items, index) => {
            return <img className='page3' key={index.toString()} src={items.url}  alt="page3"/>
        })
        return (
            <div>{banner_3}</div>
        );
    }
}

export default Page_3;
