import React, { Component } from 'react'
import { expose_effect } from '../../data/beach_details'

export default class BeachDetails extends Component {

    returnSunExposeLevel(level) {
        if(level === 3) {
            return <span className="red-text"><strong>Danger !</strong></span>
        }
    }

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
                                <p className="margin-bottom-10"><strong>Date: </strong>{only_date_array} <strong>Time: </strong>{only_time}</p>
                                <h3 className="title is-4"><strong>Sun exposure level</strong></h3>
                                <h2 className="title is-1">
                                    {this.returnSunExposeLevel(beach_details.sun_level)}
                                </h2>
                                <p className="margin-bottom-15"><strong>Suggestion Time: </strong>{beach_details.suggestion_time}</p>
                                <article className="message is-danger">
                                    <div className="message-header">
                                        <p>Why you shouldn't go to the beach on this time.</p>
                                    </div>
                                    <div className="message-body">
                                        {expose_effect}
                                    </div>
                                </article>
                                <h3 className="title is-4"><strong>HABs Level : (toxic level)</strong></h3>
                                <h2 className="title is-2`">
                                    <span className="orange-text"><strong>Very High</strong></span>
                                </h2>
                                <p>
                                    <button className="button is-warning"><strong>What is HABs?</strong></button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}