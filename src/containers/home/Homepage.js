/*global google*/
import React, { Component } from 'react'
import SearchInputBox from '../../components/homepage/SearchInputBox'
import loadGoogleMapApi from '../../helpers/loadGoogleMapHelper'
import PropTypes from 'prop-types';

export default class Homepage extends Component {

    constructor() {
        super()
        this.gotoBeachDetails = this.gotoBeachDetails.bind(this)
        this.mapSearchInputId = 'search-input'
        this.state = {
            currentLat: -25.363,
            currentLng: 131.044
        }
    }


    componentDidMount() {
        this.initGooglemap()

    }

    displayMap() {
        let latLong = {lat: this.state.currentLat, lng: this.state.currentLng};
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: latLong
        });

        let input = document.getElementById(this.mapSearchInputId);
        let autocomplete = new google.maps.places.Autocomplete(input);

        autocomplete.bindTo('bounds', map);

        let marker = new google.maps.Marker({
            map: map,
            position: latLong,
        });

        autocomplete.addListener('place_changed', () => {
            marker.setVisible(false);

            let place = autocomplete.getPlace();
            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);  // Why 17? Because it looks good.
            }

            this.setState({
                ...this.state,
                currentLat: place.geometry.location.lat(),
                currentLng: place.geometry.location.lng()
            })

            marker.setPosition(place.geometry.location);
            marker.setVisible(true);

        })
    }

    initGooglemap() {
        loadGoogleMapApi(() => {
            this.displayMap()
        });
    }

    gotoBeachDetails(name,date) {
        this.context.router.push(`/details/name/${name}/date/${date}/lat/${this.state.currentLat}/lng/${this.state.currentLng}`)
    }

    render() {

        return (
            <div className="container">
                <section className="hompage-container">
                    <h1 className="has-text-centered">Search your beach</h1>
                    <SearchInputBox id={this.mapSearchInputId}
                                    gotoBeachDetails={this.gotoBeachDetails}/>
                    <div id="map"/>
                </section>
            </div>
        )
    }
}

Homepage.contextTypes = {
    router: PropTypes.object.isRequired
};