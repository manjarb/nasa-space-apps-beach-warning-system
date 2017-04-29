import React, { Component } from 'react'

export default class BeachDetails extends Component {
    render() {

        const params = this.props.params

        return (
            <div className="container beach-details-container">
                <section className="beach-details-section">
                    <h1 className="has-text-centered">{params.name}</h1>
                    <div className="details-box">
                        <div className="columns">
                            <div className="column is-5">
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}