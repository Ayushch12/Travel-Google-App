import React from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMap } from "@react-google-maps/api";

// import { Paper, Typography, useMediaQuery } from "@material-ui/core";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
// import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = ({
  coords,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const classes = useStyles();
  // const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 30.3753, lng: 69.3451 };

  return (
    <div className={classes.mapContainer} style={{height:'100vh', width:'100%'}}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB6iGfMEkHSjCU0_Gd3MJuM6rqaPt_2YJY",
      libraries:["places"]
      }}
        defaultCenter={coordinates}
        // center={coordinates}
        defaultZoom={14}
        
        margin={[50, 50, 50, 50]}
        options={null}
        onChange={null}
        onChildClick={null}
      ></GoogleMapReact> */}
    
    <GoogleMap
    mapContainerStyle={{height:'100vh', width:'100%'}}
    center={coordinates}
    zoom={14}
    
    ></GoogleMap>

    
    </div>
  );
};

export default Map;
