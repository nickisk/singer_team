import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {
	onMarkerClick = () => {

	}
	render() {
		return (

			<Map
				initialCenter={{
					lat: this.props.latitude,
					lng: this.props.longitude
				}}
				google={this.props.google} zoom={14}>

				<Marker onClick={this.onMarkerClick}
					name={'Current location'} />

			</Map>

		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCp3GePGDQmHLOYaUF2fSfydXxd1-8LTdU',
})(MapContainer)
