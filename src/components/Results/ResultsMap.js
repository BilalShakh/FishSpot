import React from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"



function getArr(object){
    var arr = []
    Object.keys(object).forEach(function(key){
        arr.push(object[key]);
    });
    return arr
}



const mapContainerStyle = {
    width: "100vw",
    height: "60vh"
};



export default function ResultsMap({locations, zoomLevel}) {
    //console.log(location, zoomLevel);
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    const arr = getArr(locations);

    return (
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={zoomLevel} 
                center={{ lat: locations.first.lat, lng: locations.first.lng }}
            >
                {arr.map(item => <Marker position={{ lat: item.lat, lng: item.lng }}/>)}

            </GoogleMap>
        </div>
    );
}