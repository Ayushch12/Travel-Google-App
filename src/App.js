import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { LoadScript } from "@react-google-maps/api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
//import PlaceDetails from './components/PlaceDetails/PlaceDetails'

const App = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB6iGfMEkHSjCU0_Gd3MJuM6rqaPt_2YJY" libraries={["places"]} >
      <CssBaseline />

      {/* For the HEADER  */}
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        {/* For the LINE  */}
        <Grid item xs={12} md={4}>
          <List />
        </Grid>

        {/* For the MAP  */}
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </LoadScript>
  );
};
export default App;
