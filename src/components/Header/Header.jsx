import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from "@material-ui/icons";

const Header = ( )=>{
    return(

        <AppBar position="static">
            <Toolbar className= {classes.toolbar}>

               <Typography variant="h5" className="{classes.title}" >
                Travel Avisor
                </Typography>
                <Box display="Flex">
                <Typography variant="h6" className={classes.title}>
                  Explore new places
                </Typography>
                <Autocomplete>
                    <div className={classes.search}>
                        <div  className={classes.searchIcon}>
                        <SearchIcon />
                         </div>
                    </div>
                </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header ;

