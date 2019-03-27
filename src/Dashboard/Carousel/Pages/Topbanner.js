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
<<<<<<< HEAD
=======
       
        
>>>>>>> 85371ae15f896054c3971cbb4e10a2b1d4f5c3ba
        axios({
            url:(`${this.state.apiUrl}`),
            method: 'post',
            data: JSON.stringify({refresh:"true", carousel_id:id})
        }).then(res => {
            this.setState({topbanner: res.data.output})
        })
    }
    render() {
<<<<<<< HEAD
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
                   
                        <img key={index.toString()} src={items.url} />
                    
                ) 
        })
        return (
            this.state.topbanner.length > 0 && (
                <Swiper {...params}>
                    {topbanner_map}
                </Swiper>
            )
            
=======
        console.log(this.state.topbanner);
        const topbanner_map = this.state.topbanner.map((items, index) => {
            console.log(items);
            
        })
        return (
            <Swiper>
                {topbanner_map}
            </Swiper>
>>>>>>> 85371ae15f896054c3971cbb4e10a2b1d4f5c3ba
        );
    }
}

export default Topbanner;
