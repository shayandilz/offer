import React from 'react'
import { Link } from 'react-router-dom'

const SearchResult = (props) => {
    const { title, price, thumb, id, store_name } = props

    
  return (
      
    <div className="col-md-4" id="searchresult">
      <div className="card mb-2 ml-2 mt-2 shadow-sm">
        <div className="card-body">
            
            <img  src={thumb} alt=""/>
            <h6 className="muted">{store_name}</h6>
            <h6>{title}</h6>
            <p >
               {price} 
            </p>
            <Link to={`products/item/${id}`} className="btn btn-dark btn-block">
            <i className="fa fa-chevron-right"></i> View Product
            </Link>
        </div>
      </div>
    </div>
  )
}
export default SearchResult