import React, {Component} from 'react'
import ModuleGroupSelector from './ModuleGroupSelector'
import axios from 'axios'
import './Navbar.css'
import Search from '../../../Search/Search'
import new_logo_offer from '../../../Layout/new_logo_offer.png'

export default class MainNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiUrl: 'https://api2.off-er.ir/user/get/categories',
            categories: []
        }
    }
    componentDidMount() {
        axios({
            url: (`${this.state.apiUrl}`),
            method: 'post',
            data: JSON.stringify({cat_id: "catroot", colored_icon: 'true'})
        }).then(res => {
            this.setState({categories: res.data.output.categories})
        })
    }

    render() {
        return (
            <React.Fragment>
                <nav className='fixed-top'>
                    <div id="navbar_top">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-md-10">
                                    <div className="row no-gutters">
                                        <div className='col-md-2'>
                                            <img src={new_logo_offer} alt='offer_logo'/>
                                            <span className="offer_decide">تصمیم گیری با آفر</span>
                                        </div>
                                        <div className="col-md-8">
                                            <Search/>
                                        </div>
                                        <div className='col-md-2'>
                                            <span className="offer_register">ثبت نام کنید</span>
                                            <i className="fas fa-user-circle"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='navbar_bottom'>
                        <div className='container'>
                            <div className="row justify-content-md-center">
                                <div className='col-md-10'>
                                    <div className='row no-gutters'>
                                        <div className="col-md-2">
                                            <span className="favorites">علاقه مندی ها</span>
                                        </div>
                                        <div className="col-md-8"></div>
                                        <div className="col-md-2">
                                            <ModuleGroupSelector moduleGroups={this.state.categories}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </React.Fragment>
        )
    }
}
