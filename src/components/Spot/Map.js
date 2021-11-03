import React from 'react'
//npm install --google-map-react
import GoogleMapReact from 'google-map-react'
//npm install --save-dev @iconify/react
import { Icon } from '@iconify/react'



const ObjectPointer = ({ text }) => (
    <div className="pointer">
      <Icon icon="akar-icons:location" className="pointer_icon" />
      <p className="pointer_text">{text}</p>
    </div>
)



const Map = ({ location, zoomLevel }) => (
<div className="map">
    <div className="google-map">
    <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDsHPRgT-culwhK_LMVrOi9zbrRdGijXjQ' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
    >
        <ObjectPointer
        lat={location.lat}
        lng={location.lng}
        text={location.text}
        />
    </GoogleMapReact>
    </div>
</div>
)

export default Map