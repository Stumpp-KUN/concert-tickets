import React from "react";
import {withGoogleMap, GoogleMap} from "react-google-maps";

const Map = () => {
    const MyGoogleMapComponent= withGoogleMap(props=>{<GoogleMap/>});

    return(
        <div>
            <MyGoogleMapComponent 
            containerElement={
                <div style={{height:`100%`}}/>
            }
            mapElement={
                <div style={{height:`100%`}}/>
            }
            />
        </div>
    )
}

export default Map;