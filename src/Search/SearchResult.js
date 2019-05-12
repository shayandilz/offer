import React from 'react'
import {Link} from 'react-router-dom'
import './Search.css'
const SearchResult = (props) => {
    const {
        title,
        current_price,
        lowest_price,
        thumb,
        id,
        store_name
    } = props

    return (

        <div className="col-md-3" id="searchresult">
            <img src={thumb} alt=""/>
            <div className="sexy_line"></div>
            <p className="muted">{store_name}</p>
            <h6>{title}</h6>

            <p>{lowest_price}</p>
            <Link to={`products/item/${id}`}>
                <button type="button" className="btn btn-light rounded-pill">{
                        new Intl
                            .NumberFormat({style: 'currency', currency: 'IRR'})
                            .format(current_price)
                    }</button>
            </Link>
        </div>
    )
}
export default SearchResult