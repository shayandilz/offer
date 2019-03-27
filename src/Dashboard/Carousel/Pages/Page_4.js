import React, { Component } from 'react';
import axios from 'axios'
class Page_4 extends Component {
    constructor(props){
        // console.log(props);
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
        const banner_4 = this.state.banner.map((items, index) => {
            return <img key={index.toString()} src={items.url} />
        })
        return (
            <div>{banner_4}</div>
        );
    }
}

export default Page_4;
