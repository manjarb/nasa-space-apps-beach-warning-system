import React, { Component } from 'react'
import SearchInputBox from '../../components/homepage/SearchInputBox'
import loadGoogleMapApi from '../../helpers/loadGoogleMapHelper'

export default class Homepage extends Component {

    componentDidMount() {
        this.initGooglemap()
    }

    initGooglemap() {
        loadGoogleMapApi(() => {
            alert('gg success')
        });
    }

    render() {
        return (
            <div className="container">
                <section className="hompage-container">
                    <h1 className="has-text-centered">Search your beach</h1>
                    <SearchInputBox />
                </section>
            </div>
        )
    }
}