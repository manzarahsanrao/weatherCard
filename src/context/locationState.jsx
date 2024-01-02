// locationState.jsx
import React, { useState } from "react";
import LocationContext from "./locationContext";

const LocationState = (props) => {

    const [loc, setLoc] = useState("karachi")

    const store = {
        location: loc,
        changeLoc: (val) => {
            setLoc(val)
        }
    }
    console.log(store.location)
    return (
        <LocationContext.Provider value={store}>
            {props.children}
        </LocationContext.Provider>
    );
}

export default LocationState;
