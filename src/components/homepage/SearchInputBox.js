import React, { Component } from 'react';
//import Flatpickr from 'flatpickr'
import Flatpickr from 'react-flatpickr'

export default class SearchInputBox extends Component {

    constructor() {
        super()
        this.searchPlace = this.searchPlace.bind(this)
        this.changeCurrentDate = this.changeCurrentDate.bind(this)
        this.state = {
            currentDate: new Date()
        }
    }

    componentDidMount() {

    }

    searchPlace() {
        if(this.search_place_input.value !== "" &&
           this.search_place_input.value !== null &&
            this.search_place_input.value !== undefined) {

            this.props.gotoBeachDetails(this.search_place_input.value,this.state.currentDate)

        } else {
            alert('Please input your beach name')
        }
    }

    changeCurrentDate(date) {
        this.setState({
            ...this.state,
            currentDate: date
        })
    }

    render() {

        console.log(this.props)

        return (
            <div className="search-input-box-container homepage-input-form-container">
                <div className="field is-grouped">
                    <p className="control">
                        <input className="input wide-input"
                               type="text"
                               placeholder="Type your beach name"
                               ref={(input) => this.search_place_input = input}
                               id={this.props.id}/>
                    </p>
                    <p className="control">
                        <Flatpickr data-enable-time
                                   className="input"
                                   onChange={v => this.changeCurrentDate(v)}
                                   options={{
                                       minDate: '2017-01-01',
                                       altInput: true,
                                       defaultDate: new Date()
                                   }}/>
                    </p>
                    <p className="control">
                        <button onClick={this.searchPlace} className="button is-info">
                            Search
                        </button>
                    </p>
                </div>
            </div>
        )
    }

}