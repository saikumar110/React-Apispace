import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { apis } from ".././Config/Config"
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
     img: {
          padding: "10px",
          objectFit: "cover !important",
          width: "auto"
     }
})




function LandingPage() {

     const classes = useStyles();

     return (
          <>
               <CssBaseline />



               <Container fixed >
                    <Typography variant="h3" className={classes.Head} gutterBottom gutterTop component="div">
                         Api Base
                    </Typography>
                    <Box sx={{ width: '100%' }}>
                         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">

                              {apis.map((api) => {
                                   return (
                                        <Grid md={4} >
                                             <Card sx={{ maxWidth: 345 }} style={{ height: "100%" }} elevation={3}>
                                                  <CardActionArea>
                                                       <CardMedia
                                                            component="img"
                                                            height="140"
                                                            image={api.imgUrl}
                                                            alt={api.Name}
                                                            className={classes.img}
                                                            width={"100%"}
                                                       />
                                                       <CardContent>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                 {api.Name}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                 {api.disp}
                                                            </Typography>
                                                       </CardContent>
                                                  </CardActionArea>
                                                  <CardActions fullWidth="true">
                                                       <Button component={Link} to={api.link} color="primary" fullWidth="true">
                                                            View
                                                       </Button>
                                                  </CardActions>
                                             </Card>
                                        </Grid>

                                   );
                              })}


                         </Grid>
                    </Box>
               </Container>
               {/* <Builder/> */}
          </>
     );
}

export default LandingPage;
