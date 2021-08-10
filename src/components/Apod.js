import React from 'react';
import { useState, useEffect } from 'react';

export default function Apod(){
   const [PhotoData, setPhotoData] = useState(null)

   useEffect(() =>{
   fetchPhoto();
   
   async function fetchPhoto(){
       const response = await fetch(
           'https://api.nasa.gov/planetary/apod?api_key=W6aqNycC3WGBPn3wvU7y2Uoh9xNZER3e0hmXR7fm'
       );
       const data = await response.json();
       setPhotoData(data);
   }
}, []);

if (!PhotoData) return <div></div>;

return(
    <div>
            <img 
            src={PhotoData.url}
            alt={PhotoData.title} />
          </div>
)
}
    