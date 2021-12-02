import './App.css';
import Builder from './Components/Email_builder/Email-Body/Builder';
import Header from "../src/Components/Email_builder/Header/Header"
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
import { apis } from "./Config/Config"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { makeStyles } from '@mui/styles';
import EmailBuilder from './Pages/EmailBuilder/EmailBuilder';
import TravelAdvisor from "./Pages/TravelAdvisor/TravelAdvisor"
import LandingPage from './Components/LandingPage';
const useStyles = makeStyles({
  img: {
    padding:"10px",
    objectFit:"cover !important",
    width:"auto"
  }
})




function App() {

  

  return (
    <>
      
     
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<LandingPage/>} exact />
          <Route path="/unlayer" element={<Builder/>}  />
          <Route path="/travel-advisor" element={<TravelAdvisor/>}  />
        </Routes>
       
      </BrowserRouter>
    
      
    </>
  );
}

export default App;
