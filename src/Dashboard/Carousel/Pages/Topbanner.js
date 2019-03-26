import React, { Component } from 'react';
import axios from 'axios';
import Swiper from 'react-id-swiper';
class Topbanner extends Component {
    constructor(props){
        // console.log(props);
        super(props)
        this.state = {
            apiUrl:'https://api2.off-er.ir/user/get/carousel',  
            topbanner:[]
        };
    }
    componentDidMount(){
        const id = this.props.value.id
       
        
        axios({
            url:(`${this.state.apiUrl}`),
            method: 'post',
            data: JSON.stringify({refresh:"true", carousel_id:id})
        }).then(res => {
            this.setState({topbanner: res.data.output})
        })
    }
    render() {
        console.log(this.state.topbanner);
        const topbanner_map = this.state.topbanner.map((items, index) => {
            console.log(items);
            
        })
        return (
            <Swiper>
                {topbanner_map}
            </Swiper>
        );
    }
}

export default Topbanner;
