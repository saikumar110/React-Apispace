import './App.css';
import Builder from './Components/Email_builder/Email-Body/Builder';

import {BrowserRouter, Routes, Route} from "react-router-dom"
// import { makeStyles } from '@mui/styles';
import TravelAdvisor from "./Pages/TravelAdvisor/TravelAdvisor"
import LandingPage from './Components/LandingPage';






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
