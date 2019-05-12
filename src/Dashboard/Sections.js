import React, {Component} from 'react'
import * as axiosDashboardContext from '../context'
import Carousel from './Carousel/Carousels'
import Editors from './Editors/Editors'
import Action from './Action/Action'
import Test from './Test'

export default class Sections extends Component {
    constructor() {
        super()
        this.state = {
            sections: []
        }
    }
    componentDidMount() {
        axiosDashboardContext
            .axiosDashboard()
            .then((res) => {
                this.setState({sections: res.output.sections})
            })
    }

    render() {
        const section_map = this
            .state
            .sections
            .map((items, index) => {
                if (items.type === "carousel") {
                    return <Carousel key={index.toString()} value={items}/>
                } else if (items.type === "editor") {
                    return <Editors key={index.toString()} value={items}/>
                } else if (items.type === "action") {
                    return <Action key={index.toString()} value={items}/>
                }
            })
        return (

            <div className='container'>
                <div className='row justify-content-md-center'>

                    <div className='col-md-10 sections'>

                        {section_map}
                    </div>
                </div>
            </div>

        )
    }
}
