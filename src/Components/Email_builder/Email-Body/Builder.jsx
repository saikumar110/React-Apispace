import React, { useEffect } from 'react';
import Header from "../Header/Header"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
     palette: {
          mode: 'dark',
     },
});


const Builder = (props) => {

     const html = () => {
          // eslint-disable-next-line
          unlayer.exportHtml(function (data) {
               // const json = data.design; // design json
               const html = data.html; // final html
               console.log(html);
               // Do something with the json and html
          })
     }

     const PlainText = () => {
          // eslint-disable-next-line
          unlayer.exportPlainText(function (data) {
               // const json = data.design; // design json
               const text = data.text; // final text
               console.log(text);
               // Do something with the json and text
          })
     };

     const Image = () => {
          // eslint-disable-next-line
          unlayer.exportImage(function (data) {
               // const json = data.design; // design json
               const imageUrl = data.url; // image url
               console.log(imageUrl);
               // Do something with the image url
          })
     }

     const Pdf = () => {
          // eslint-disable-next-line
          unlayer.exportPdf(function (data) {
               // const json = data.design; // design json
               const pdfUrl = data.url; // pdf url
               console.log(pdfUrl);
               // Do something with the PDF url
          })
     }

     const Zip = () => {
          // eslint-disable-next-line
          unlayer.exportZip(function (data) {
               // const json = data.design; // design json
               const fileUrl = data.url; // zip file url
               console.log(fileUrl);
          })
     }

     const onReady = () => {
          // editor is ready
          // eslint-disable-next-line
          unlayer.init({
               id: 'roots',
               projectId: 1071,
               displayMode: 'web'

          })
          document.getElementById("roots").style.height = "90vh"
          // eslint-disable-next-line
          unlayer.addEventListener('editor:ready', function () {
               console.log("jkkjjkjkjkjkjkjkkkjkjj");
          });
         

     };


     useEffect(() => {
          onReady();
     },[])

     return (
          <>
               <ThemeProvider theme={darkTheme}>
                    <Header
                         html={html}
                         Zip={Zip}
                         PlainText={PlainText}
                         Pdf={Pdf}
                         Image={Image}

                    />
                    <div id="roots">

                    </div>

                    
               </ThemeProvider>
          </>
     )
}

export default Builder
