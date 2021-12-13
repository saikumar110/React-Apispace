import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import useStyles from './style';

const Map = ({ coordinates, setcoordinates, setBounds, bounds, places,setchildclicked }) => {
  const isMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCxx7ILhaKCUL0DjBwCokyepV5ROPAwbXk" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
       
        onChange={
          (e) => {
            setcoordinates = { lat: e.center.lat, lng: e.center.lng }
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          }
        }
        onChildClick={(child)=>setchildclicked(child)}

      >
        {
          places?.map((place, i) => {
            return(
              <div

              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}

            >

              {
                !isMobile? (
                  <LocationOnOutlinedIcon color="primary" size="large" />
                ):(
                  <Paper elevation={6} className={classes.paper}>
                   <Typography variant="p" className={classes.typography} gutterBottom>
                     {place.name}
                   </Typography>
                   <img
                      className={classes.pointer}
                      src={place?.photo? place.photo.images.large.url : ""}
                      alt={place.name}
                   />
                   <Rating size="small" value = {place.rating}  readOnly/>
                  </Paper>
                )
              }

            </div>
            )
          })
        }


      </GoogleMapReact>
    </div>
  );
};

export default Map;