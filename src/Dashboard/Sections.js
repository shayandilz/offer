import React, { Component } from 'react'

import * as axiosDashboardContext from '../context'
import Carousel from './Carousel/Carousels'
import Editors from './Editors/Editors'
import Action from './Action/Action'
import MainNavbar from './Navbar/Main'
export default class Sections extends Component {
    constructor(){
        super()
        this.state={
            sections:[]
        }
    }
    
   componentDidMount(){
    axiosDashboardContext.axiosDashboard().then((res) => {
        this.setState({sections: res.output.sections})
    })
   }

render(){
        const section_map = this.state.sections.map((items, index) => {
            if(items.type === "carousel"){
                return <Carousel key={index.toString()} value={items} />
            }else if(items.type === "editor"){
                return <Editors key={index.toString()} value={items} />
            }else if(items.type === "action"){
                return <Action key={index.toString()} value={items} />
            }
        })
    return(
        <div >
        <MainNavbar />
            <div className='container'>
                <div className='row  row justify-content-sm-center'>
                    <div className='col-10 sections'>
                        {section_map}
                    </div>
                </div>
            </div>
        </div>
        
    )
}



}



