import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"


//Converts JSON object to an array
function getArr(object){
    var arr = []
    Object.keys(object).forEach(function(key){
        arr.push(object[key]);
    });
    return arr
}


//Google map's styling
const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
};



export default function Map(props) {
    let locations = props.locations;
    let zoomLevel = props.zoomLevel;
    const [selected, setSelected] = React.useState(null);

    //Wrapper for loading up google maps into a react application
    const {isLoaded, loadError} = useLoadScript({
        //using a local .env file to store api key for security sake
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    //Makes sure that the map is loaded up
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
                {/*Creates a marker for each of the given locations to this component*/}
                {arr.map(item => 
                        <Marker 
                            position={{ lat: item.lat, lng: item.lng }}
                            onClick={() => {
                                setSelected(null);
                                setSelected(item);
                            }}
                        />
                    )
                }

                {/*Creates an information window for each of the markers on the map*/}
                {selected ? 
                    <InfoWindow 
                        position={{lat: selected.lat+0.0002, lng: selected.lng}} 
                        onCloseClick={()=>{
                            setSelected(null);
                        }}
                    >
                        <h2>{selected.text}</h2>
                    </InfoWindow> : null
                }

            </GoogleMap>
        </div>
    );
}