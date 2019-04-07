import React from 'react'
import { Link } from 'react-router-dom'
const Track = (props) => {
    const { title, price, thumb, id } = props

  return (
      
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
            <h6>{title}</h6>
            <img  src={thumb} alt=""/>
            <p className="card-text">
                <strong>Price</strong> : {price} <i className="fa fa-dollar-sign"></i>
            </p>
            <Link to={`products/item/${id}`} className="btn btn-dark btn-block">
            <i className="fa fa-chevron-right"></i> View Product
            </Link>
        </div>
      </div>
    </div>
  )
}
export default Track