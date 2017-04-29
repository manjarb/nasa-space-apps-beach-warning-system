import React, { Component } from 'react';
//import Flatpickr from 'flatpickr'
import Flatpickr from 'react-flatpickr'

export default class SearchInputBox extends Component {

    componentDidMount() {

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
                               id={this.props.id}/>
                    </p>
                    <p className="control">
                        <Flatpickr data-enable-time
                                   className="input"
                                   onChange={v => console.info(v)}
                                   options={{
                                       minDate: '2017-01-01',
                                       altInput: true
                                   }}/>
                    </p>
                    <p className="control">
                        <a className="button is-info">
                            Search
                        </a>
                    </p>
                </div>
            </div>
        )
    }

}