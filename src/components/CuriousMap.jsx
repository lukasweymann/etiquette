import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from 'leaflet';
import RandomFactContainer from "./RandomFactContainer";
import locations from "./locations";
import './CuriousMap.css';

const flag = new Icon ({
    iconUrl: '/flag.png',
    iconSize: [20, 20]
});

const CuriousMap = (props) => {
    const position = [props.lng, props.lat];
    const {countries = []} = props;

    const getPositionByCountryCode = (country_code) => {
        const foundLocation = locations.find((location) => {
            return location.code === country_code
        })
        return [foundLocation.lat, foundLocation.lng]
    }
    console.log(countries)
    
    return (
        <Map 
            center={position} 
            zoomControl={false} 
            zoom={2}
            doubleClickZoom={false}
            dragging={false}
            zoomSnap={false}
            zoomDelta={false}
            trackResize={false}
            touchZoom={false}
            scrollWheelZoom={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {countries && countries.map((country) => {
                const countryPosition = getPositionByCountryCode(country.country_code);
                return (
                    <Marker icon={flag} position={countryPosition}>
                        <Popup 
                            className="curious-map-popup"
                        >
                            <RandomFactContainer
                                country={ country }
                            />
                        </Popup>
                    </Marker>
                )
            })}
            
        </Map>
    );
};

export default CuriousMap;