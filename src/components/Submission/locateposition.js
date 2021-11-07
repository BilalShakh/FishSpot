import React, { Component } from 'react'

class UserPosition extends Component {
   state = {
      latitude: 'unknown',
      longitude: 'unknown',
   }
   componentDidMount = () => {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            const latitude = position.coords.latitude;
            this.setState({ latitude });
            const longitude = position.coords.longitude;
            this.setState({ longitude });
            
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
   }
   render() {
      return (
            <div>
              <p >Latitude: {this.state.latitude}  Longitude: {this.state.longitude}</p>
            </div>
      )
   }
}
export default UserPosition







