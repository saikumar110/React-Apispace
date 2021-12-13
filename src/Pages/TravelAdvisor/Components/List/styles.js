import { makeStyles } from '@mui/styles';
// import { alpha } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
// AIzaSyAzDQquY4U--vtkIeL1HrQdH53mLKmtNcI

const theme = createTheme();
export default makeStyles ({
     formControl: {
       margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
     },
     selectEmpty: {
       marginTop: theme.spacing(2),
     },
     loading: {
       height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
     },
     container: {
       padding: '25px',
     },
     marginBottom: {
       marginBottom: '30px',
     },
     list: {
       height: '65vh', overflow: 'auto',
     },
   });