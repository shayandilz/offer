import React, { Component } from 'react';
import axios from 'axios';
import Swiper from 'react-id-swiper';
import './Topbanner.css'
class Topbanner extends Component {
    constructor(props){
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
        const params = {
            pagination: {
            el: '.swiper-pagination',
            clickable: true
      },
            containerClass: 'topbanner',
            slidesPerView: 1,
            slidesPerGroup: 1,
            runCallbacksOnInit:true,
            speed:300,
            slidesPerColumn:1,
            loopFillGroupWithBlank: false,
            preloadImages:true,
            updateOnImagesReady:true
        }
            
        const topbanner_map = this.state.topbanner.map((items, index) => {
            return ( 
                   <img key={index.toString()} src={items.url}  alt="topbanner"/>
            ) 
        })
        return (
            this.state.topbanner.length > 0 && (
                <Swiper {...params}>
                    {topbanner_map}
                </Swiper>
            ) 
        );
    }
}

export default Topbanner;
