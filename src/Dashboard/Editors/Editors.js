import React, { Component } from "react";
import axios from "axios";
import Swiper from "react-id-swiper";

 class Editors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: 'https://api2.off-er.ir/user/get/editor',
      original: [],
      thumbnail: [],
      gallerySwiper: null,
      thumbnailSwiper: null
    };
    this.galleryRef = this.galleryRef.bind(this);
    this.thumbRef = this.thumbRef.bind(this);
  }

  componentDidMount() {
    axios({
      url: (`${this.state.apiUrl}`),
      method: "post",
      data: JSON.stringify({ refresh: "true", editor_id: this.props.value.id })
    }).then(res => {
      this.setState({ original: res.data.output.items });
      this.setState({ thumbnail: res.data.output.items });
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.gallerySwiper && nextState.thumbnailSwiper) {
      const { gallerySwiper, thumbnailSwiper } = nextState

      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }

  galleryRef(ref) {
    if (ref) this.setState({ gallerySwiper: ref.swiper })
  }

  thumbRef(ref) {
    if (ref) this.setState({ thumbnailSwiper: ref.swiper })
  }

  render() {
    const params = {
      containerClass:'editorSwiperGallery',
      slidesPerView: 1,
      loopedSlides:5,
      centeredSlides:true,
      loop:true
    };
    const thumbnailParams = {
   
      containerClass:'editorSwiperThumbs',
      slideClass:'sliderThumb',
      direction: "vertical",
      slidesPerView: 4,
      loopedSlides:5,
      loop:true
      
      
    };

    return (
      <React.Fragment>
        <div className="container">
          {this.state.original.length && (
            <div className="row">
            <div className="col-md-10">
              <Swiper {...params} ref={this.galleryRef} className="row">
                {this.state.original.map((items, i) => {
                  return (
                    <div key={i.toString()} >
                    <div className='row'>
                    
                      <div className="col-md-6">
                        <h5>{items.name}</h5>
                          <div>
                            <h6>{items.store_name}</h6>
                            <img src={items.store.thumb_url} alt="editors" />
                          </div>
                        <p>{items.current_price}</p>
                        <p>{items.last_price}</p>
                      </div>
                      <div className="col-md-6">
                        <img className="img_editors" src={items.thumb_url} alt='editors'/>
                      </div>
                    </div>
                      
                    </div>
                  );
                })}
              </Swiper>
            </div>
            <div className="col-md-2">
              <Swiper {...thumbnailParams} ref={this.thumbRef}>
                {this.state.original.map((items, i) => {
                  return (
                    <div key={i.toString()}>
                      <img className="thumb_editors" src={items.thumb_url} alt='editors'/>
                    </div>
                  );
                })}
              </Swiper>
            </div>
          </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default Editors
