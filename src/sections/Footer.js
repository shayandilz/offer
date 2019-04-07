import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        
            <div id="footer" className="row">
                <div className="col-md-4 py-3 px-lg-5">

                </div>
                <div className="col-md-4 py-3 px-lg-5">
                    <ul>
                        <li>
                             <a href="_blank">Contact Us</a>
                        </li>
                        <li>
                             <a  href="_blank">About Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 py-3 px-lg-5">
                    <ul>
                        <li>
                            <a  href="_blank">Q&A</a>  
                        </li>
                        <li>
                            <a  href="_blank">Terms of use</a>
                        </li>
                        <li>
                             <a  href="_blank">Retail Stores</a>  
                        </li>
                    </ul>
                </div>
            </div>
       
      
    )
  }
}
