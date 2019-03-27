import React, { Component } from 'react'
import axios from 'axios'
import Swiper from 'react-id-swiper';
export default class Items_action extends Component {
  constructor(props){
    // console.log(props);
    
    super()
    this.state = {
        apiUrl:'https://api2.off-er.ir/user',
        items:[],
    }
  }
  componentDidMount(){
      axios({
        
        url:(`${this.state.apiUrl}${this.props.value.uri} `),
        method: 'post',
        data: this.props.value.request
        
      }).then(res => {
        this.setState({items: res.data.output.items})
        
      })
       
    }
  render() {
    const params = {
      ContainerEl: 'section',
      WrapperEl: 'section',
      containerClass:'containerClasss',
      slidesPerView: 5,
      spaceBetween: 20,
      slidesPerGroup: 1,
      autoplay:true,
      loop: true,
      loopFillGroupWithBlank: false,
      rebuildOnUpdate: true,
      crossFade:true,
      
    };
    // console.log(this.state.items);
    
    const Items_list = this.state.items.map((item, index) => {
      return(
        <div className="col-md-2" key={index.toString()} id="editors">
             
                   <div className="figure">
                      
                      <h5 className="figure-caption mt-1 pr-3">{item.off_percent}%</h5>
                   </div>
                   <div>
                      <img className="img_editors" src={item.thumb_url} alt=""/>
                   </div>
                   <div className="col-sm-12"><p className="nowrap">{item.name}</p></div> 
                   <div><p>{item.last_price}</p><span>{item.current_price}</span></div> 
                   <div> <button type="button" className=" btn btn-danger btn-sm btn-block"><a href='_blank'>Buy From {item.store_name}</a></button></div>   
        </div>    
      )
    })
    return (
      <Swiper className="mb-4" {...params}>{Items_list}</Swiper>
    )
  }
}
