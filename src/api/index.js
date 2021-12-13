import axios from "axios";


// const URL = 'https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary';


   
   



const getPlacedata = async (type,sw,ne) =>{
     try {
          const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
    
     
               params: {
                 bl_latitude: sw.lat,
                 tr_latitude:ne.lat ,
                 bl_longitude: sw.lng,
                 tr_longitude:ne.lng ,       
               },
               headers: {
                 'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                 'x-rapidapi-key': 'c64477f5cemshc55c6ce39045df2p1e9929jsn5f773e90b280'
               }
          })
          return data
     } catch (error) {
          if (error.response.status=== 429){
               const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
    
     
                    params: {
                      bl_latitude: sw.lat,
                      tr_latitude:ne.lat ,
                      bl_longitude: sw.lng,
                      tr_longitude:ne.lng ,       
                    },
                    headers: {
                      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                      'x-rapidapi-key': 'd46bd01c2cmsh4e9573f5eeece4cp104fcejsn4016dc963204'
                    }
               })
               return data
          }
         
     }
}

export {getPlacedata};