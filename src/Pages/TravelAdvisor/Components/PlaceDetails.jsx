import React from 'react'
import {Typography,Card,CardMedia,CardActions,Button,CardContent,Box,Chip} from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';

const PlaceDetails = ({place,selected,refProp}) => {
     if (selected)refProp?.current?.scrollIntoView({behavior:"smooth",block:"start"});

     return (
          <Card elevation={9}>
               <CardMedia
                    style={{height:250}}
                    image={place?.photo? place.photo.images.large.url : ""}
               />
               <CardContent>
                    <Typography variant="h6" gutterBottom>
                         {place.name}
                    </Typography>
                    <Box display="flex" justifyContent="space-between">
                    <Rating size="small" value = {place.rating}  readOnly/>
                    <Typography variant="subtitle1" >
                       Out of  {place.num_reviews} views
                    </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1" >
                         Price
                    </Typography>
                    <Typography variant="body2" >
                        {place.price_level}
                    </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1" >
                         <PhoneIcon/>
                    </Typography>
                    <Typography variant="body2" >
                        {place.phone}
                    </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1" >
                         Rating
                    </Typography>
                    <Typography variant="body2" >
                        {place.rating}
                    </Typography>
                    </Box>
                    {place?.award?.map((award)=>(
                         <Box display="flex" justifyContent="space-between">
                         <img src={award.images.small} alt={award.display.name} />
                    <Typography variant="p" >
                        {place.ranking}
                    </Typography>
                    </Box>
                    ))}
                    {place?.cuisine?.map(({name})=>(
                         <Chip  key={name} size="small" label={name} style={{margin: '5px 5px 5px 0'}}/>
                    ))}

               </CardContent>
               <CardActions>
                    <Button 
                     onClick={()=>window.open(place.web_url,"_blank")}
                     >Travel Advisor</Button>
                     {place.website &&<Button 
                     onClick={()=>window.open(place.website,"_blank")}
                     >Website</Button>}
               </CardActions>
         </Card>
     )
}

export default PlaceDetails
