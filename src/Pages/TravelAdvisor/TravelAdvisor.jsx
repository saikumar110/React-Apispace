import { CssBaseline,Grid } from '@mui/material'
import React,{useEffect,useState} from 'react'
import Header from './Components/Header-ta/Header'
import List from "./Components/List/List"
import Map from "./Components/Map/Map"
import {getPlacedata} from "../../api/index"


const TravelAdvisor = () => {

     const [places, setplaces] = useState([])
     const [filteredPlaces, setfilteredPlaces] = useState([])
     const [coordinates, setcoordinates] = useState({})
     const [bounds, setBounds] = useState(null)
     const [childclicked, setchildclicked] = useState(null)
     const [isLoading, setisLoading] = useState(false)
     const [type, setType] = useState("restaurants")
     const [rating, setrating] = useState(0)

     useEffect(() => {
         navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
          setcoordinates({lat:latitude,lng:longitude})
         })
     },[])

     useEffect(() => {
          const filterPlaces = places.filter((place) => place.rating<rating );
          setfilteredPlaces(filterPlaces)
          // eslint-disable-next-line
     }, [rating])

     useEffect(() => {
          setisLoading(true)
          bounds && getPlacedata(type ,bounds.sw,bounds.ne)
               .then((result) => {
                    setplaces(result)
                    setfilteredPlaces([])
                    setisLoading(false)
               }).catch((err) => {
                    
               });
     }, [type,coordinates,bounds])

     return (
          <div>
               <CssBaseline/>
               <Header/>
               <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                         <List places={filteredPlaces.length ? filteredPlaces:places} childclicked={childclicked} isLoading={isLoading} setType={setType} type={type} setrating={setrating}/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                         <Map
                              coordinates={coordinates}
                              setcoordinates={setcoordinates}
                              setBounds={setBounds}
                              bounds={bounds}
                              places={filteredPlaces.length ? filteredPlaces:places}
                              setchildclicked={setchildclicked}
                         />
                    </Grid>
               </Grid>
          </div>
     )
}

export default TravelAdvisor
