import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Consumer} from '../context'
class Search extends Component {
    constructor() {
        super()
        this.state = {
            productTitle: '',
            apiUrl: 'https://api2.off-er.ir/user/get/items',
         

        }
    }

    findProduct = (dispatch, e) => {
        
        e.preventDefault()
        
        axios
            .post(
                `${this.state.apiUrl}`,
                JSON.stringify({query: this.state.productTitle})
            )
            .then(res => {
                dispatch({type: 'SEARCH_TRACKS', payload: res.data.output.items})
                console.log(res)
                this.setState({items: res.data.output.items})

            })
            .catch(err => console.log(err))
        }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
      
     
        return (
            <Consumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div>
                                <form
                                    onSubmit={this
                                        .findProduct
                                        .bind(this, dispatch)}>
                                    <div className="form-group" id="form_div">
                                        <input
                                            type="text"
                                            className="form-control form-control-md"
                                            placeholder="...محصولات دسته یا برند مورد نظرتان را انتخاب کنید"
                                            name="productTitle"
                                            value={this.state.productTitle}
                                            onChange={this.onChange}/>

                                        <button className="btn" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </form>

                            </div>

                        )
                    }
                }
            </Consumer>
        )
    }
}
export default Search