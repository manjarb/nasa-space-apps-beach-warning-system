/*global google*/
import React, { Component } from 'react'
import SearchInputBox from '../../components/homepage/SearchInputBox'
import loadGoogleMapApi from '../../helpers/loadGoogleMapHelper'

export default class Homepage extends Component {

    constructor() {
        super()
        this.mapSearchInputId = 'search-input'
    }


    componentDidMount() {
        this.initGooglemap()

    }

    displayMap() {
        let latLong = {lat: -25.363, lng: 131.044};
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: latLong
        });
        // let marker = new google.maps.Marker({
        //     position: latLong,
        //     map: map
        // });

        let input = document.getElementById(this.mapSearchInputId);
        let autocomplete = new google.maps.places.Autocomplete(input);

        autocomplete.bindTo('bounds', map);

        let marker = new google.maps.Marker({
            map: map,
            position: latLong,
        });

        autocomplete.addListener('place_changed', () => {
            marker.setVisible(false);
            alert('change place')
        })
    }

    initGooglemap() {
        loadGoogleMapApi(() => {
            this.displayMap()
        });
    }

    render() {

        return (
            <div className="container">
                <section className="hompage-container">
                    <h1 className="has-text-centered">Search your beach</h1>
                    <SearchInputBox id={this.mapSearchInputId}/>
                    <div id="map"/>
                </section>
            </div>
        )
    }
}