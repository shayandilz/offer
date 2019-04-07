import React, { Component } from 'react'
import axios from 'axios'
import Swiper from 'react-id-swiper';
import './Items_action.css'
export default class Items_action extends Component {
  constructor(props){
    super(props)
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
      containerClass:'items_container',
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 1,
      centeredSlides:true,
      autoplay:true,
      loop: true,
      loopFillGroupWithBlank: false,
      rebuildOnUpdate: true,
      crossFade:true,
    };
    const Items_list = this.state.items.map((item, index) => {
      return(
        <div key={index.toString()} id="items_action" className="mt-4">
          <div>
            <h5 className=" mt-1 pr-3">{item.off_percent > 0 ? item.off_percent: ''}%</h5>
          </div>
          <div>
            <img src={item.thumb_url} alt=""/>
          </div>
          <div className="sexy_line"></div>
            <div className="col-sm-12"><p className="nowrap">{item.name}</p></div> 
              <div>
                <p>
                  {item.off_percent > 0 ? new Intl.NumberFormat({ style: 'currency', currency: 'IRR' }).format(item.last_price) : ''}
                </p>
                <span>
                  {new Intl.NumberFormat({ style: 'currency', currency: 'IRR' }).format(item.current_price)}
                </span>
              </div> 
            </div>    
          )
        })
      return (
        <Swiper className="mb-4 " {...params}>{Items_list}</Swiper>
      )
    }
}
