import React, { Component } from 'react';
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> 85371ae15f896054c3971cbb4e10a2b1d4f5c3ba

class Page_3 extends Component {
    constructor(props){
        // console.log(props);
        super(props)
<<<<<<< HEAD
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
            return <img key={index.toString()} src={items.url} />
        })
        return (
            <div>{banner_3}</div>
=======
        
    }
    render() {
        return (
            <div>
                
            </div>
>>>>>>> 85371ae15f896054c3971cbb4e10a2b1d4f5c3ba
        );
    }
}

export default Page_3;
