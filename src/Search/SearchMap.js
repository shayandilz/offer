import React, { Component } from 'react'
import { Consumer } from '../context'
import SearchResult from './SearchResult'

import './Search.css'
 class Tracks extends Component {
  render() {
    return (
      <Consumer>
          {value => {
              const { items } = value
              
              if(items === undefined || items.length === 0){
                return 'hello'
              }else{
                return(
                    <React.Fragment>

                      <div id='products_search'>
                      <div className='container'>
                        <div className="row justify-content-end">
                                {items.map(item => ( 
                                    <SearchResult key={item.id} id={item.id} title={item.name} current_price={item.current_price} lowest_price={item.lowest_price} store_name={item.store_name} thumb={item.thumb_url}/>
                                  
                                    
                                ))}
                        </div>
                        </div>
                      </div>
                       
                        
                    </React.Fragment>
                    
                )
              }
          }}
      </Consumer>
    )
  }
}
export default Tracks