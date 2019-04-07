import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();


export const axiosDashboard = () => {
    const URL = (`https://api2.off-er.ir/user/dashboard`);
    return axios(URL, {
      method: 'POST',
      data: JSON.stringify({refresh:"true"}),
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });  
  };

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_TRACKS':
        return {
          ...state,
          items: action.payload,
          heading: 'Search Results'
        };
      default:
      return state
    }
}

export class Provider extends Component {
  state = { 
    dispatch:action => this.setState(state => reducer(state, action))
  }
  render() {
    return (
      <Context.Provider value={this.state}>
          {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer