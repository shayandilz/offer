import React, {Component} from 'react'
import axios from 'axios'

const API_URL = 'https://api2.off-er.ir/user/get/items'
class Test extends Component {

    state = {
        query: '',
        results: []
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    }
    getInfo = () => {
        axios
            .post(`${API_URL}`, JSON.stringify(this.state.query))
            .then(({data}) => {
                console.log(data);

            })
    }

    render() {
        return (
            <section>
                <form>
                    <label>
                        <span>Search for books</span>
                        <input type="search" placeholder="microservice, restful design, etc.,"/>
                        <button type="submit">Search</button>
                    </label>
                </form>
            </section>
        )
    }
}

export default Test
