
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
         bootstrapURLKeys={{ key: 'AIzaSyB6iGfMEkHSjCU0_Gd3MJuM6rqaPt_2YJY' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={null}
        onChange={null}
        onChildClick={null}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;
