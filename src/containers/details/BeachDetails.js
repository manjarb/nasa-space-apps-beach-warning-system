import React, { Component } from 'react'

export default class BeachDetails extends Component {
    render() {

        const params = this.props.params
        const beach_details = this.props.beach_details
        const beach_name_array = params.name.split(",")
        beach_name_array.splice(0,1)

        const date_array = params.date.split(" ")
        const only_date_array = [date_array[0],date_array[1],date_array[2]].join(" ")
        console.log(only_date_array)

        const only_time = date_array[4]

        return (
            <div className="container beach-details-container">
                <section className="beach-details-section">
                    <h1 className="has-text-centered">{beach_name_array[0]}</h1>
                    <p className="has-text-centered">{beach_name_array.join()}</p>
                    <div className="details-box">
                        <div className="columns">
                            <div className="column is-5">
                                <img src={beach_details.image_url} alt=""/>
                            </div>
                            <div className="column is-7">
                                <p><strong>Date: </strong>{only_date_array} <strong>Time: </strong>{only_time}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}