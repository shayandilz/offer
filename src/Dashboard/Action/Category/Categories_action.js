import React, { Component } from 'react'
import axios from 'axios'
import Swiper from 'react-id-swiper';
export default class Categories_action extends Component {
    constructor(props){
        super()
        this.state = {
            apiUrl:'https://api2.off-er.ir/user',
            cat_list:[],
        }
    }
    
    componentDidMount(){
      var new_request = JSON.parse(this.props.value.request)
      new_request.colored_icon = "true";
        axios({
          
          url:(`${this.state.apiUrl}${this.props.value.uri} `),
          method: 'post',
          data: JSON.stringify(new_request)
          
        }).then(res => {
          this.setState({cat_list: res.data.output.categories})
          
        })
         
      }
   
  render() {
    const params = {
      slidesPerView: 8,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: false,
      rebuildOnUpdate: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };

    const categ_list = this.state.cat_list.map(( item, index) => {
       
      return (
          <div id="icon_circle" key={index.toString()}>
              <a href="_blank"> 
                  <img src={item.icon.url}  alt="PRODUCTS"/>
                  <h6 >{item.name}</h6>
                  </a>
               </div>     
      )
 })
    return(
      this.state.cat_list.length > 0 && (
        <Swiper className="swippper" {...params}>
        {categ_list}
        </Swiper>
    )
    
    ) 
    }
}
