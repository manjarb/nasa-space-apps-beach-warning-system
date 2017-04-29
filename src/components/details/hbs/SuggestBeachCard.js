import React, { Component } from 'react'
import { Link } from 'react-router'

export default class SuggestBeachCard extends Component {

    render() {

        const beach = this.props.beach
        const params = this.props.params
        const full_beach_name = `${beach.name}, ${beach.address}, ${beach.country}`

        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={beach.image_url} alt="Image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        {/*<div className="media-left">*/}
                            {/*<figure className="image is-48x48">*/}
                                {/*<img src="http://bulma.io/images/placeholders/96x96.png" alt="Image"/>*/}
                            {/*</figure>*/}
                        {/*</div>*/}
                        <div className="media-content">
                            <p className="title is-4"><strong>{beach.name}</strong></p>
                            <p className="subtitle is-6">{beach.address} <br/> {beach.country}</p>
                        </div>
                    </div>

                    <div className="content">
                        <strong>HABs Level : (toxic level)</strong>
                        <p className="green-text"><strong>Normal</strong></p>
                        <Link to={`details/name/${full_beach_name}/date/${params.date}/lat/${params.lat}/lng/${params.lng}`}>
                            <button className="button is-info full-width-button"><strong>Details</strong></button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}