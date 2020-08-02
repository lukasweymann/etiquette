import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import RandomFactContainer from "./RandomFactContainer";
import locations from "./locations";

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
        <Map center={position} zoom={3}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {countries && countries.map((country) => {
                const countryPosition = getPositionByCountryCode(country.country_code)
                return (
                    <Marker position={countryPosition}>
                        <Popup>
                            <RandomFactContainer
                                country={
                                    country
                                }
                            />
                        </Popup>
                    </Marker>
                )
            })}
            
        </Map>
    );
};

export default CuriousMap;