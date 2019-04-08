import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Consumer} from '../context'
 class Search extends Component {
     state = {
         productTitle: '',
         apiUrl:'https://api2.off-er.ir/user/get/items',
         redirect: false
         
     }
     findProduct = (dispatch, e) => {
         e.preventDefault()

         axios.post(`${this.state.apiUrl}`,JSON.stringify({query:this.state.productTitle}))
        .then(res => {
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.output.items
            })
            
            this.setState({items: res.data.output.items, redirect:true})
            
        })
        .catch(err => console.log(err))
     }
     onChange = e => {
         this.setState({ [e.target.name]: e.target.value})
     }
  render() {
   
    if(this.state.redirect) return <Redirect to="/searchresult"/>
    return (
      <Consumer>
          {value => {
              const { dispatch } = value;
              return (
                      <form onSubmit={this.findProduct.bind(this, dispatch)}>
                            <div className="form-group" id="form_div"> 
                                <input type="text" 
                                        className="form-control form-control-md"
                                        placeholder="...محصولات دسته یا برند مورد نظرتان را انتخاب کنید" 
                                        name="productTitle"
                                        value={this.state.productTitle}
                                        onChange={this.onChange}     
                                />

                                <button className="btn"type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                      </form>   
                    )
          }}
      </Consumer>
    )
  }
}
export default Search