import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const MyMap = props => {
    const position = [props.lng, props.lat];
    return (
        <Map center={position} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>{props.popupText}</Popup>
            </Marker>
        </Map>
    );
};

export default MyMap;
