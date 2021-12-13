import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
import Header from './Header/Header';

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

               <Header/>

               <Container fixed >
                    
                    
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center"
  alignItems="center" style={{margin:"auto"}}>

                              {apis.map((api) => {
                                   return (
                                        <Grid item xs={12} sm={4} md={4} >
                                             <Card sx={{ maxWidth: 345 }} style={{ height: "100%" }} elevation={8}>
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
                   
               </Container>
               {/* <Builder/> */}
          </>
     );
}

export default LandingPage;
