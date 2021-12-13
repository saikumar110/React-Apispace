import React, { useState ,useEffect, createRef} from 'react'
import useStyle from "./styles"
import { Typography, FormControl, Select, MenuItem, InputLabel,Grid,CircularProgress } from '@mui/material';
import PlaceDetails from "../PlaceDetails"
const List = ({places,childclicked,isLoading,setType,type,setrating,rating}) => {
     console.log(childclicked);
     const classes = useStyle();
     
     const [elrefs, setelrefs] = useState([])
     
     useEffect(() => {
          setelrefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
          
        }, [places]);
     
     return (
          <div className={classes.container}>
          {isLoading? 
               <div className={classes.loading}>
                    <CircularProgress/>
               </div>
          :<>
               <Typography variant="h6">
                    Restaurants, Hotels & Attractions around you
               </Typography>
               <FormControl className={classes.formControl} style={{minWidth:'45%',marginTop:10}}>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         value={type}
                         label="Age"
                         onChange={(e)=>{setType(e.target.value)}}
                    >
                         <MenuItem value="restaurants" >Restaurants</MenuItem>
                         <MenuItem value="hotels" >Hotels</MenuItem>
                         <MenuItem value="attractions" >Attractions</MenuItem>
                    </Select>
               </FormControl>
               <FormControl className={classes.formControl} style={{minWidth:'45%',marginTop:10,marginLeft:10}}>
               <InputLabel id="demo-simple-select-labela">Rating</InputLabel>
                    <Select
                         labelId="demo-simple-select-labela"
                         id="demo-simple-selectw"
                         value={rating}
                         label="Age"
                         onChange={(e)=>{setrating(e.target.value)}}
                    >
                         <MenuItem value={0} >All</MenuItem>
                         <MenuItem value={3} >Above 3.0</MenuItem>
                         <MenuItem value={4} >Above 4.0</MenuItem>
                         <MenuItem value={4.5} >Above 4.5</MenuItem>
                    </Select>
                   
               </FormControl>

               <Grid container spacing={3} className={classes.list} style={{marginTop:25}}>
               {places?.map((place, i) => (
              <Grid ref={elrefs[i]}  key={i} item xs={12}>
                    
                <PlaceDetails
                    place={place} 
                     selected = {Number(childclicked) === i}
                     refProp = {elrefs[i]}
                />
              </Grid>
            ))}
               </Grid>
               </>}
          </div>
     )
}

export default List
