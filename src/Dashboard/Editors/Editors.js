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
      
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      
      
      crossFade: true
    };
    const thumbnailParams = {
     
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 5,
      slidesPerGroup: 1,
      autoplay: true,
      loop: true,
      loopFillGroupWithBlank: false,
    };

    return (
      <React.Fragment>
        <div className="container">
          {this.state.thumbnail.length && this.state.original.length && (
            <div className="row">
            <div className="col">
              <Swiper {...params} ref={this.galleryRef}>
                {this.state.original.map((items, i) => {
                  return (
                    <div key={i.toString()}>
                      <img className="img_editors" src={items.thumb_url} />
                    </div>
                  );
                })}
              </Swiper>
            </div>
            <div className="col">
              <Swiper {...thumbnailParams} ref={this.thumbRef}>
                {this.state.thumbnail.map((items, i) => {
                  return (
                    <div key={i.toString()}>
                      <img className="thumb_editors" src={items.thumb_url} />
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
